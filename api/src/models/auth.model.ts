import { getConnection, getRepository } from "typeorm";
import Users from "../entity/Users.entity";

export async function registerUser(input) {
  const repository = await getRepository(Users);
  const result = await repository.save({ ...input });
  return result;
}
