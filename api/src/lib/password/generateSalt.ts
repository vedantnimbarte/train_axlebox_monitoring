import { randomBytes } from "crypto";

export default function generateSalt() {
  return randomBytes(32).toString("hex");
}
