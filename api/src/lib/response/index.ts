import { Response } from "express";
export default function generateResponse(
  successCode: boolean,
  response: Response,
  http_code: number,
  message?: string,
  data?: string[]
) {
  return response.status(http_code).send({
    success: successCode,
    message: message,
    data,
  });
}
