import { Router } from "express";
import auth from "./auth";
import users from "./users";

/**
 * Initializes a router from express.
 */
const router: Router = Router();

/**
 * Imports several routes from each file into the router.
 */
router.use("/auth", auth);
router.use("/users", users);

export default router;
