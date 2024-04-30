import { Schema, model } from "mongoose";
import { IUser, UserDoc } from "../types/models";

/**
 * Defines the User schema.
 */
const UserSchema: Schema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
  },
  name: String,
  hash: String,
  salt: String,
});

/**
 * Creates and exports the User model blueprint with
 * the defined schema.
 */
export default model<UserDoc>("User", UserSchema);
