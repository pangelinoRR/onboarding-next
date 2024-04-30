import { Router } from "express";
import controllers from "../controllers";

/**
 * Initializes a router from express.
 */
const router: Router = Router();

/**
 * Sets up the login route.
 *
 * POST /api/auth/login
 */
router.post("/login", controllers.auth.login);

/**
 * Sets up the register route.
 *
 * POST /api/auth/register
 */
router.post("/register", controllers.auth.register);

export default router;
