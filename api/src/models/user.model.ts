import { getConnection, getRepository } from "typeorm";
import Users from "../entity/Users.entity";

export async function addUser(input) {
  const repository = await getRepository(Users);
  const result = await repository.save({ ...input });
  return result;
}

export async function getUser(input) {
  const repository = await getRepository(Users);
  const result = await repository.findOne({ where: { ...input } });
  return result;
}
