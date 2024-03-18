import express from "express";
import pool, { createTable } from "./config/sql.js";

const app = express();

async function init() {
  try {
    await createTable();
    serverStart();
  } catch (error) {
    console.log(error);
  }

  function serverStart() {
    app.get("/", async (_, res) => {
      try {
        const resultQuery = await pool.query("SELECT * FROM costumer");
        const rows = resultQuery.rows;
        return res.status(200).json(rows);
      } catch (error) {
        return res.status(401).json(error);
      }
    });
    app.listen(3000);
  }
}

init();
