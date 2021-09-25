import "reflect-metadata";
import * as express from "express";
import routes from "./routes";

const app: express.Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log(`server listening on port 3000`);
  routes(app);
});
