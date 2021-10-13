import { getRepository } from "typeorm";
import Train_Data from "../entity/TrainData.entity";

export async function getTrains() {
  const repository = await getRepository(Train_Data);
  const result = repository
    .createQueryBuilder()
    .select(["id", "train", "unique_id"])
    .distinct(true)
    .orderBy("id", "DESC")
    .getRawMany();
  return result;
}

export async function getTrainData(input) {
  const repository = await getRepository(Train_Data);
  const result = await repository.findOne({
    where: {
      unique_id: input.unique_id,
    },
  });
  return result;
}
