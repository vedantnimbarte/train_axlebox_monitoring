import { Express, Request, Response } from "express";
import { registerUserHandler } from "./controller/auth.controller";

export default function (app: Express) {
  app.get("/healthcheck", (Req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/auth/register", registerUserHandler);
}
