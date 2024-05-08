import { Router } from "express";
import controllers from "../controllers";
import middleware from "../middleware";

/**
 * Initializes a router from express.
 */
const router: Router = Router();

/**
 * Returns a list of artist queried via
 * the Spotify API.
 *
 * GET /api/artists/search
 * Requires Authentication.
 */
router.get("/search", middleware.jwt(), controllers.artists.search);

/**
 * Returns a specific artist via the Spotify API.
 *
 * GET /api/artists/:id
 * Requires Authentication.
 */
router.get("/:id", middleware.jwt(), controllers.artists.get);

/**
 * Returns the albums from a specific artist via the Spotify API.
 *
 * GET /api/artists/:id/albums
 * Requires Authentication.
 */
router.get(
  "/:id/albums",
  middleware.jwt(),
  controllers.artists.getAlbumsByArtistId
);

/**
 * Returns the top tracks from a specific artist via the Spotify API.
 *
 * GET /api/artists/:id/top-tracks
 * Requires Authentication.
 */
router.get(
  "/:id/top-tracks",
  middleware.jwt(),
  controllers.artists.getTopTracksByArtistId
);

/**
 * Returns a list of artists via the Spotify API.
 *
 * GET /api/artists
 * Requires Authentication.
 */
router.get("/", middleware.jwt(), controllers.artists.list);

export default router;
