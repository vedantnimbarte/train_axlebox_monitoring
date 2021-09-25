import comparePassword from "./comparePassword";
import generateSalt from "./generateSalt";
import hashPassword from "./hashPassword";

const password = { generateSalt, hashPassword, comparePassword };
export default password;
