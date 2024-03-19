import pool from "../config/sql.js";

export const getAllcostumers = async (_, res) => {
  try {
    const resultQuery = await pool.query("SELECT * FROM customer");
    const rows = resultQuery.rows;
    res.status(200).json(rows);
  } catch (error) {
    res.status(401).json(error);
  }
};

export const addCostumers = async (req, res) => {
  try {
    const { title, price } = req.body;
    const resultQuery = await pool.query(
      "INSERT INTO customer(title, price) VALUES($1, $2)",
      [title, price]
    );
    const rows = resultQuery.rows;
    res.status(201).json(rows);
  } catch (error) {
    res.status(401).json(error);
  }
};
