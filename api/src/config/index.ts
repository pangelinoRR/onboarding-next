import dotenv from "dotenv";
import { Application, json } from "express";
import cors from "cors";
import database from "./database";
import passport from "./passport";
import router from "./router";

const bootstrap = function (app: Application): void {
  /**
   * Initializes environment variables.
   */
  dotenv.config();

  /**
   * Connects to the database.
   */
  database();

  /**
   * Initializes Passport.
   */
  passport(app);

  /**
   * Allows express to parse json body data.
   */
  app.use(json());

  /**
   * Allows external requests.
   */
  app.use(cors());

  /**
   * Registers all routes.
   */
  router(app);
};

export default bootstrap;
