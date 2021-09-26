import { Request, Response } from "express";
import StatusCodes from "../enum/http-status-codes.enum";
import generateResponse from "../lib/response";
import { registerUserService } from "../services/auth.service";

let data: string[] = new Array();

export async function registerUserHandler(req: Request, res: Response) {
  try {
    const { successCode, message } = await registerUserService(req.body);
    return generateResponse(successCode, res, StatusCodes.OK, message, data);
  } catch (err) {
    return generateResponse(false, res, StatusCodes.BAD_REQUEST);
  }
}
