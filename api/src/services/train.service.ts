import ResponseMessage from "../enum/messages.enum";
import { getTrains, getTrainData } from "../models/traindata.model";

export async function getTrainsService() {
  const result = await getTrains();
  return {
    successCode: true,
    message: ResponseMessage.UPDATE_SUCCESS,
    data: result,
  };
}
