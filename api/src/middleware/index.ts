import passport from "passport";

/**
 * Exports middleware to apply in routes.
 *
 * "jwt": Authentication middleware with JWT.
 */
export default {
  jwt: () => passport.authenticate("jwt", { session: false }),
};
