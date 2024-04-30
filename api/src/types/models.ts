import { Document } from "mongoose";

/**
 * Interface for User Input.
 */
export interface IUser {
  email: string;
  name: string;
  hash: string;
  salt: string;
}

/**
 * Interface for User Document
 */
export interface UserDoc extends IUser, Document {}
