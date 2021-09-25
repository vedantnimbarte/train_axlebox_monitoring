import hashPassword from "../lib/password/hashPassword";
import getUserId from "../lib/uid";
import { addUser } from "../models/user.model";

export async function registerUserService(input) {
  const hashedPassword = hashPassword(input["password"]);
  const uuid = getUserId();
  const password = hashedPassword.hash;
  const salt = hashedPassword.salt;

  Object.assign(input, { password, uuid, salt });
  const { name } = await addUser(input);
  return name;
}
