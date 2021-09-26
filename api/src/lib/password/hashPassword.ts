import { pbkdf2Sync } from "crypto";
import generateSalt from "./generateSalt";

export default function hashPassword(password: string, userSalt?: string) {
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
