import { Router } from "express";
import controllers from "../controllers";
import middleware from "../middleware";

/**
 * Initializes a router from express.
 */
const router: Router = Router();

/**
 * Returns a list of albums queried via
 * the Spotify API.
 *
 * GET /api/albums/search
 * Requires Authentication.
 */
router.get("/search", middleware.jwt(), controllers.albums.search);

/**
 * Returns the newest album releases.
 *
 * GET /api/albums/new-releases
 * Requires Authentication.
 */
router.get(
  "/new-releases",
  middleware.jwt(),
  controllers.albums.getNewReleases
);

/**
 * Returns a specific album via the Spotify API.
 *
 * GET /api/albums/:id
 * Requires Authentication.
 */
router.get("/:id", middleware.jwt(), controllers.albums.get);

/**
 * Returns the tracks from a specific album via the Spotify API.
 *
 * GET /api/albums/:id/tracks
 * Requires Authentication.
 */
router.get(
  "/:id/tracks",
  middleware.jwt(),
  controllers.albums.getTracksByAlbumId
);

/**
 * Returns a list of albums via the Spotify API.
 *
 * GET /api/albums
 * Requires Authentication.
 */
router.get("/", middleware.jwt(), controllers.albums.list);

export default router;
