import "reflect-metadata";
import * as config from "config";
import { createConnection } from "typeorm";
import logger from "../logger";
import Users from "../entity/Users.entity";
import Temp_Data from "../entity/Temperature.entity";
export default function connect() {
  const db_host = config.get("dbHost") as string;
  const db_user = config.get("dbUser") as string;
  const db_password = config.get("dbPassword") as string;
  const db_port = config.get("dbPort") as number;
  const db_name = config.get("dbName") as string;

  logger.info("Connecting to database...");

  return createConnection({
    type: "mysql",
    host: db_host,
    port: db_port,
    username: db_user,
    password: db_password,
    database: db_name,
    entities: [Users, Temp_Data],
    synchronize: true,
    logging: false,
  })
    .then(() => {
      logger.info(`Connected to database...`);
    })
    .catch((error) => {
      logger.error(`[DATABASE ERROR]: ${error}`);
      process.exit(1);
    });
}
