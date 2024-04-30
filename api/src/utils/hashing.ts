import crypto from "crypto";

/**
 * Generates a new hashed password.
 */
const generate = function (password: string): {
  salt: string;
  hash: string;
} {
  const salt = crypto.randomBytes(32).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, "sha512")
    .toString("hex");

  return { salt, hash };
};

/**
 * Validates an incoming password against a hashed one.
 */
const validate = function (
  password: string,
  hash: string,
  salt: string
): boolean {
  return (
    hash ===
    crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex")
  );
};

export default {
  generate,
  validate,
};
