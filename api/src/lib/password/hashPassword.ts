import { pbkdf2Sync } from "crypto";
import generateSalt from "./generateSalt";

export default function hashPassword(password) {
  let salt = generateSalt();
  let hash = pbkdf2Sync(password.toString(), salt, 1000, 64, "sha512").toString(
    "hex"
  );
  return { hash: hash, salt: salt };
}
