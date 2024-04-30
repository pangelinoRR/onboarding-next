import { Application } from "express";
import passport from "passport";
import {
  ExtractJwt,
  Strategy as JWTStrategy,
  StrategyOptionsWithoutRequest,
  VerifiedCallback,
} from "passport-jwt";
import User from "../models/User";
import { UserDoc } from "../types/models";

const initialize = function (app: Application): void {
  /**
   * Options for the JWT authentication strategy.
   */
  const options: StrategyOptionsWithoutRequest = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || "secret",
  };

  /**
   * Defines the JWT Strategy, which consists in
   * trying to get a User from the database given a
   * certain ID, coming from the JWT payload.
   * If it finds that User, then it means the User is
   * successfully authenticated.
   */
  const strategy: JWTStrategy = new JWTStrategy(
    options,
    async (payload: any, done: VerifiedCallback) => {
      try {
        const user: UserDoc | null = await User.findOne({ _id: payload.sub });

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error, null);
      }
    }
  );

  /**
   * Registers the defined strategy in passport.
   */
  passport.use(strategy);

  /**
   * Initializes Passport for every request.
   */
  app.use(passport.initialize());
};

export default initialize;
