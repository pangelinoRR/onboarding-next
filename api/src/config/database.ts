import mongoose from "mongoose";
import { DatabaseConfig } from "../types/database";

const initialize = function (): void {
  /**
   * Object with the configuration coming from the .env file.
   */
  const db: DatabaseConfig = {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
  };

  /**
   * Composes the connection string.
   */
  const connectionString: string = `mongodb://${db.username}:${db.password}@${db.host}:${db.port}/${db.name}?authSource=admin`;

  mongoose
    .connect(connectionString)
    .then((): void => {
      /**
       * Connection was successful.
       */
      console.log(`Connected to the database "${db.name}".`);
    })
    .catch((error: any) => {
      /**
       * Connection failed.
       */
      console.error("Failed to connect to the database:");
      console.error(error);
    });
};

export default initialize;
