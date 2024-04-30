import express, { Application } from "express";
import bootstrap from "./config";

/**
 * Gets an Express application instance.
 */
const app: Application = express();

/**
 * Initializes all configurations for
 * the application, including the database connection,
 * passport, body parsers and router.
 */
bootstrap(app);

/**
 * Starts the app.
 */
app.listen(process.env.PORT || 3000);
