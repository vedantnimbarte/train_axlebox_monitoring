import ResponseMessage from "../enum/messages.enum";
import hashPassword from "../lib/password/hashPassword";
import getUserId from "../lib/uid";
import {
  addUser,
  getUserByEmail,
  getUserByMobileNo,
} from "../models/user.model";

export async function registerUserService(input) {
  const { email, mobile_no } = input;
  let emailExists = await getUserByEmail(email);
  if (emailExists !== undefined) {
    return { successCode: false, message: ResponseMessage.EMAIL_EXISTS };
  }
  let mobileExists = await getUserByMobileNo(mobile_no);
  if (mobileExists !== undefined) {
    return { successCode: false, message: ResponseMessage.MOBILE_EXISTS };
  }

  const hashedPassword = hashPassword(input["password"]);
  const uuid = getUserId();
  const password = hashedPassword.hash;
  const salt = hashedPassword.salt;

  Object.assign(input, { password, uuid, salt });
  await addUser(input);
  return { successCode: true, message: ResponseMessage.REGISTER_SUCCESS };
}
