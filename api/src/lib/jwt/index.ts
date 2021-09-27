import { sign, verify, JwtPayload } from "jsonwebtoken";
import * as config from "config";

const secret: string = config.get("secret") as string;

export function generateToken(payload) {
  let token = sign(payload, secret, { expiresIn: "60s" });

  return token;
}

export function verifyToken(token: string) {
  let tokenInfo = new Array();
  verify(token, secret, function (error, decoded) {
    if (error) {
      tokenInfo.push({ success: 0 });
    }
    tokenInfo.push({ success: 1, message: decoded.userId });
  });
  return tokenInfo;
}
