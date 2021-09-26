enum ResponseMessage {
  REGISTER_SUCCESS = "User registered successfully",
  LOGIN_SUCCESS = "Login successfull",
  UPDATE_SUCCESS = "Data updated successfully",
  EMAIL_EXISTS = "Email already exists",
  MOBILE_EXISTS = "Mobile number already exists",
  EMAIL_NOT_EXISTS = "User with this email does not exists",
  PASSWORD_NOT_MATCHED = "Password is incorrect",
}

export default ResponseMessage;
