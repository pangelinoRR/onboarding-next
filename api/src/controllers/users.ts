import User from "../models/User";
import { Response } from "express";
import { UserDetailsRequest } from "../types/controllers";
import { UserDoc } from "../types/models";

/**
 * Handler for the details route for User.
 */
const details = async (req: UserDetailsRequest, res: Response) => {
  try {
    const user: UserDoc | null = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).send({
      message: "User fetched successfully",
      data: {
        user: {
          _id: user?._id,
          name: user?.name,
          email: user?.email,
        },
      },
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error fetching the details for the User", error });
  }
};

export default {
  details,
};
