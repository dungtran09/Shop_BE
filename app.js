import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import express from "express";
import "./src/dbs/init.mongodb.js";
import accessRouter from "./src/routers/access/access.router.js";
import Redoc from "redoc-express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const isProduction = process.env.NODE_ENV === "prod";
app.use(cors());

// init midd
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

app.use(express.json());

app.use("/api/v1/access", accessRouter);

// Redoc UI
app.use(
  "/openapi.yaml",
  express.static(path.join(__dirname, "./src/docs/openapi.yaml")),
);

app.use(
  "/redoc",
  (req, res, next) => {
    if (isProduction) {
      res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self' https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:;",
      );
    } else {
      res.setHeader("Content-Security-Policy", "");
    }

    next();
  },
  (req, res) => {
    Redoc({
      title: "API Documentation",
      specUrl: "http://localhost:3000/openapi.yaml",
      redocOptions: { scrollYOffset: 50 },
    })(req, res);
  },
);
export default app;
