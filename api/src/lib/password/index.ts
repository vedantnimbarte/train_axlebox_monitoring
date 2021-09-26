import { pbkdf2Sync, randomBytes } from "crypto";

function generateSalt() {
  return randomBytes(32).toString("hex");
}

export function hashPassword(password: string, userSalt?: string) {
  let salt: string;
  if (userSalt === undefined || userSalt === null) {
    salt = generateSalt();
  }
  salt = userSalt;
  let hash = pbkdf2Sync(password.toString(), salt, 1000, 64, "sha512").toString(
    "hex"
  );
  return { hash: hash, salt: salt };
}
