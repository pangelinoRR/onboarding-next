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

export interface SpotifySearchRequest extends Request {
  query: {
    q: string;
    limit?: string;
    offset?: string;
  };
}

export interface SpotifyGetRequest extends Request {
  params: {
    id: string;
  };
}

export interface SpotifyListRequest extends Request {
  query: {
    ids: string;
  };
}

export interface SpotifySpecifiedIdRequest extends Request {
  params: {
    id: string;
  };
}
