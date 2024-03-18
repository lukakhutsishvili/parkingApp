import express from "express";
import pool, { createTable } from "./config/sql.js";
import bodyParser from "body-parser";
import cors from "cors";
import costumerRouter from "./routes/costumerRoutes.js";

const app = express();

async function init() {
  try {
    await createTable();
    serverStart();
  } catch (error) {
    console.log(error);
  }

  function serverStart() {
    app.use(bodyParser.json());
    app.use(cors());

    app.get("/api", costumerRouter);
    app.post("/api", costumerRouter);

    app.listen(3000);
  }
}

init();
