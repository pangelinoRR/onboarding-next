import { Router } from "express";
import controllers from "../controllers";
import middleware from "../middleware";

/**
 * Initializes a router from express.
 */
const router: Router = Router();

/**
 * Returns the details of a user.
 * Only for testing purposes.
 *
 * GET /api/users/:id
 * Requires Authentication.
 */
router.get("/:id", middleware.jwt(), controllers.users.details);

export default router;
