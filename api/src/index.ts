import "reflect-metadata";
import * as express from "express";
import routes from "./routes";
import * as config from "config";
import connect from "./db/connect.db";
import logger from "./logger";

const PORT = config.get("port") as number;
const HOST = config.get("host") as string;

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function initializeApi() {
  connect();
  routes(app);
  logger.info(`Server listening at http://${HOST}:${PORT}`);
}

app.listen(PORT, HOST, () => {
  initializeApi();
});
