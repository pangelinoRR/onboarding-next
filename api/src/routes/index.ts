import { Router } from "express";
import auth from "./auth";
import users from "./users";
import artists from "./artists";
import albums from "./albums";
import tracks from "./tracks";

/**
 * Initializes a router from express.
 */
const router: Router = Router();

/**
 * Imports several routes from each file into the router.
 */
router.use("/auth", auth);
router.use("/users", users);
router.use("/artists", artists);
router.use("/albums", albums);
router.use("/tracks", tracks);

export default router;
