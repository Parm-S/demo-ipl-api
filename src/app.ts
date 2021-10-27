import express, { Express } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import swaggerUI from "swagger-ui-express";

import connection from "./database/connection";
import { teamRoute } from "./routes/team-route";
import { teamDetailRoute } from "./routes/teamdetails-route";
import { httpLogger } from "./logger/httplogger";
import { notFoundRoute } from "./routes/notFound-route";

import * as swaggerdocs from "./swagger.json";

const app: Express = express();

dotenv.config();

// Connect to the database
const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB = process.env.MONGO_DB;

const DB_URL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
connection(DB_URL);

app.use(helmet());
app.use(express.json());

//generate http logs
app.use(httpLogger);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerdocs));

//Routes
app.use("/teams", teamRoute);
app.use("/teams", teamDetailRoute);
app.use("*", notFoundRoute);

export { app };
