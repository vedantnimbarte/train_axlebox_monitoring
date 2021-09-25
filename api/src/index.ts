import "reflect-metadata";
import * as express from "express";
import routes from "./routes";
import * as config from "config";

const PORT = config.get("port") as number;
const HOST = config.get("host") as string;

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
  routes(app);
});
