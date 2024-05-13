import axios, { CreateAxiosDefaults } from "axios";
import { cookies } from "next/headers";

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
  if (cookies().has("next_jwt")) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${cookies().get("next_jwt")?.value}`,
    };
  }

  return request;
});

export default instance;
