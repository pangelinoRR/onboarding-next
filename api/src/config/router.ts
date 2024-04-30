import { Application } from "express";
import routes from "../routes";

const initializer = function (app: Application): void {
  /**
   * Imports all routes.
   */
  app.use("/api", routes);
};

export default initializer;
