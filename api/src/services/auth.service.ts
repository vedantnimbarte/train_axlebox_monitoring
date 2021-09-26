import ResponseMessage from "../enum/messages.enum";
import hashPassword from "../lib/password/hashPassword";
import getUserId from "../lib/uid";
import logger from "../logger";
import {
  addUser,
  getUserByEmail,
  getUserByMobileNo,
} from "../models/user.model";

export async function registerUserService(input) {
  let result;
  const { email, mobile_no } = input;
  let emailExists = await getUserByEmail(email);
  let mobileExists = await getUserByMobileNo(mobile_no);
  if (emailExists != undefined) {
    return ResponseMessage.EMAIL_EXISTS;
  }
  if (mobileExists != undefined) {
    return ResponseMessage.MOBILE_EXISTS;
  }

  const hashedPassword = hashPassword(input["password"]);
  const uuid = getUserId();
  const password = hashedPassword.hash;
  const salt = hashedPassword.salt;

  Object.assign(input, { password, uuid, salt });
  await addUser(input);
  return ResponseMessage.REGISTER_SUCCESS;
}
