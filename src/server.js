import express from "express";
import pool, { createTable } from "./config/sql.js";
import bodyParser from "body-parser";
import cors from "cors";

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
    app.get("/api/get", async (_, res) => {
      try {
        const resultQuery = await pool.query("SELECT * FROM customer");
        const rows = resultQuery.rows;
        return res.status(200).json(rows);
      } catch (error) {
        return res.status(401).json(error);
      }
    });
    app.post("/api/post", async (req, res) => {
      try {
        const { name, pass } = req.body;
        const resultQuery = await pool.query(
          "INSERT INTO customer(name, pass) VALUES($1, $2)",
          [name, pass]
        );
        const rows = resultQuery.rows;
        return res.status(201).json(rows);
      } catch (error) {
        return res.status(401).json(error);
      }
    });
    app.listen(3000);
  }
}

init();
