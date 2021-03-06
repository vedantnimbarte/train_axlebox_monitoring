import ResponseMessage from "../enum/messages.enum";
import { generateToken, verifyToken } from "../lib/jwt";
import { hashPassword } from "../lib/password";
import getUserId from "../lib/uid";
import logger from "../logger";
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

export async function loginUserService(input) {
  const { email, password } = input;
  
  let userData = await getUserByEmail(email);
  let { hash } = hashPassword(password, userData.salt);
  if (userData === undefined) {
    return { successCode: false, message: ResponseMessage.EMAIL_NOT_EXISTS };
  }
  if (userData.password !== hash) {
    return {
      successCode: false,
      message: ResponseMessage.PASSWORD_NOT_MATCHED,
    };
  }
  delete input["password"];
  const loginDataObject = {
    token: generateToken({ userId: userData.uuid }),
  };
  return {
    successCode: true,
    message: ResponseMessage.LOGIN_SUCCESS,
    data: loginDataObject,
  };
}
