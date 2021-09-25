import { Response } from "express";
export default function generateResponse(
  response: Response,
  http_code: number,
  message?: string,
  data?: string[]
) {
  return response
    .status(http_code)
    .send(JSON.stringify({ message: message, data }));
}
