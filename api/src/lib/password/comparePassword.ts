import { pbkdf2Sync } from "crypto";

export default function comparePassword(password, passwordhash, salt) {
  let hash = pbkdf2Sync(password.toString(), salt, 1000, 64, "sha512").toString(
    "hex"
  );
  return hash === passwordhash ? true : false;
}
