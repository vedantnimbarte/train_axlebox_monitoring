import { Request, response, Response } from "express";
import StatusCodes from "../enum/http-status-codes.enum";
import generateResponse from "../lib/response";
import logger from "../logger";
import {
  loginUserService,
  registerUserService,
} from "../services/auth.service";

let responseData = new Array();

export async function registerUserHandler(req: Request, res: Response) {
  responseData.length = 0;
  try {
    const { successCode, message } = await registerUserService(req.body);
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

export async function loginUserHandler(req: Request, res: Response) {
  responseData.length = 0;
  try {
    const { successCode, message, data } = await loginUserService(
      req.body,
    );
    data != undefined && responseData.push({ ...data });
    return generateResponse(
      successCode,
      res,
      StatusCodes.OK,
      message,
      responseData
    );
  } catch (err) {
    logger.info(err.message);
    return generateResponse(false, res, StatusCodes.BAD_REQUEST);
  }
}
