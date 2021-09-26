import { getConnection, getRepository } from "typeorm";
import Users from "../entity/Users.entity";

export async function addUser(input) {
  const repository = await getRepository(Users);
  const result = await repository.save({ ...input });
  return result;
}

export async function getUserByEmail(input) {
  const repository = await getRepository(Users);
  const result = await repository.findOne({ where: { email: input } });
  return result;
}

export async function getUserByMobileNo(input) {
  const repository = await getRepository(Users);
  const result = await repository.findOne({ where: { mobile: input } });
  return result;
}
