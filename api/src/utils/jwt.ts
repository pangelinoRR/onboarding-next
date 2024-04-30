import jwt from "jsonwebtoken";
import { UserDoc } from "../types/models";
import { Schema } from "mongoose";

/**
 * Issues a new JWT token.
 */
const issue = function (user: UserDoc): string {
  const payload: { sub: Schema.Types.ObjectId; iat: number } = {
    sub: user?._id,
    iat: new Date().getTime() / 1000,
  };

  const token: string = jwt.sign(payload, process.env.JWT_SECRET || "secret", {
    expiresIn: "30m",
  });

  return token;
};

export default {
  issue,
};
