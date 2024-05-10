import { auth } from "@/auth";
import axios, { CreateAxiosDefaults } from "axios";

/**
 * Configuration for the axios instance.
 */
const config: CreateAxiosDefaults = {
  baseURL: process.env.API_URL,
  timeout: 5000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
};

/**
 * Create a new instance.
 */
const instance = axios.create(config);

instance.interceptors.request.use(async (request) => {
  const session = await auth();

  if (session) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${session.jwt}`,
    };
  }

  return request;
});

export default instance;
