import { Request, response, Response } from "express";
import StatusCodes from "../enum/http-status-codes.enum";
import generateResponse from "../lib/response";
import { getTrainsService } from "../services/train.service";

let responseData = new Array();

export async function getTrainsHandler(req: Request, res: Response) {
  responseData.length = 0;
  try {
    const { successCode, message, data } = await getTrainsService();
    data != undefined && responseData.push(...data);
    return generateResponse(
      successCode,
      res,
      StatusCodes.OK,
      message,
      responseData
    );
  } catch (err) {
    return generateResponse(false, res, StatusCodes.BAD_REQUEST);
  }
}
