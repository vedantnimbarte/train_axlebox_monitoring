import { v4 as uuid, validate } from "uuid";

export default function getUserId() {
  return uuid();
}

export function validateUserId(userid) {
  return validate(userid)
}