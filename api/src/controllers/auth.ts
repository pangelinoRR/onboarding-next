import { RequestHandler, Response } from "express";
import User from "../models/User";
import { UserDoc, IUser } from "../types/models";
import { LoginRequest, RegisterRequest } from "../types/controllers";
import hashing from "../utils/hashing";
import jwt from "../utils/jwt";

/**
 * Handler for the Login route.
 */
const login: RequestHandler = async function (
  req: LoginRequest,
  res: Response
) {
  /**
   * Fetch a user with the provided email
   */
  const user: UserDoc | null = await User.findOne({ email: req.body.email });

  try {
    /**
     * No user found with the email provided in the body.
     */
    if (!user) {
      return res.status(404).json({ message: "No user found." });
    }

    /**
     * Checks if the password is the same as the one that is hashed.
     */
    const isPasswordValid: boolean = hashing.validate(
      req.body.password,
      user.hash,
      user.salt
    );

    /**
     * Passwords do not match.
     * Return Unauthorized response.
     */
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Credentials do not match. Wrong password." });
    }

    /**
     * User is found and the passwords match.
     * Successfully respond, sending a new token.
     */
    return res.status(200).json({
      message: "Login successful",
      data: {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        token: jwt.issue(user),
      },
    });
  } catch (error) {
    return res.status(422).json({
      message: "Error during login.",
      error,
    });
  }
};

/**
 * Handler for the register route.
 */
const register = async function (req: RegisterRequest, res: Response) {
  const { hash, salt }: { hash: string; salt: string } = hashing.generate(
    req.body.password
  );

  try {
    /**
     * Create a new user in the database.
     */
    const user: UserDoc = await User.create<IUser>({
      email: req.body.email,
      name: req.body.name,
      hash,
      salt,
    });

    /**
     * Respond with the user data and a new token.
     */
    return res.json({
      message: "User created successfully",
      data: {
        user: {
          email: user.email,
          name: user.name,
          _id: user._id,
        },
        token: jwt.issue(user),
      },
    });
  } catch (error) {
    return res.json({ message: "Could not register the user.", error });
  }
};

export default {
  login,
  register,
};
