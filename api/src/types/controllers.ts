import { Request } from "express";

export interface LoginRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export interface RegisterRequest extends Request {
  body: {
    email: string;
    name: string;
    password: string;
  };
}

export interface UserDetailsRequest extends Request {
  params: {
    id: string;
  };
}
