import { Request, Response } from "express";
import StatusCodes from "../enum/http-status-codes.enum";
import ResponseMessage from "../enum/messages.enum";
import generateResponse from "../lib/response";
import { registerUserService } from "../services/auth.service";

let data: string[] = new Array();

export async function registerUserHandler(req: Request, res: Response) {
  try {
    const message = await registerUserService(req.body);
    return generateResponse(
      res,
      StatusCodes.OK,
      ResponseMessage.REGISTER_SUCCESS,
      data
    );
  } catch (err) {
    return generateResponse(res, StatusCodes.BAD_REQUEST);
  }
}
