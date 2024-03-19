import express from "express";
import pool, {  createTables } from "./config/sql.js";
import bodyParser from "body-parser";
import cors from "cors";
import costumerRouter from "./routes/costumerRoutes.js";
import SwaggerMiddleware from "./middlewares/swaggermiddleware.js";

const app = express();

async function init() {
  try {
    await createTables();
    serverStart();
  } catch (error) {
    console.log(error);
  }

  function serverStart() {
    app.use(bodyParser.json());
    app.use(cors());

    app.use("/api", costumerRouter);
    app.use("/", ...SwaggerMiddleware());

    app.listen(3000);
  }
}

init();
