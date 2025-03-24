import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import express from "express";
import "./src/dbs/init.mongodb.js";

const app = express();

// init midd
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db

export default app;
