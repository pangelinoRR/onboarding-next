import { Router } from "express";
import controllers from "../controllers";
import middleware from "../middleware";

/**
 * Initializes a router from express.
 */
const router: Router = Router();

/**
 * Returns a list of tracks queried via
 * the Spotify API.
 *
 * GET /api/tracks/search
 * Requires Authentication.
 */
router.get("/search", middleware.jwt(), controllers.tracks.search);

/**
 * Returns a specific track via the Spotify API.
 *
 * GET /api/tracks/:id
 * Requires Authentication.
 */
router.get("/:id", middleware.jwt(), controllers.tracks.get);

/**
 * Returns a list of tracks via the Spotify API.
 *
 * GET /api/tracks
 * Requires Authentication.
 */
router.get("/", middleware.jwt(), controllers.tracks.list);

export default router;
