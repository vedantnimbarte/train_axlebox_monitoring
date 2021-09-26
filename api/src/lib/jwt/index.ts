import { sign, verify, JwtPayload } from "jsonwebtoken";
import * as config from "config";

const secret: string = config.get("secret") as string;

export function generateToken(payload) {
  let token = sign(payload, secret, { expiresIn: "60s" });

  return token;
}

export function verifyToken(token: string) {
  return verify(token, secret);
}
