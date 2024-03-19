import pool from "../config/sql.js";

export const getAllcostumers = async (_, res) => {
  try {
    const resultQuery = await pool.query("SELECT * FROM customer");
    const rows = resultQuery.rows;
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const addCostumers = async (req, res) => {
  try {
    const { name, password } = req.body;
    const resultQuery = await pool.query(
      "INSERT INTO customer(name, password) VALUES($1, $2)",
      [name, password]
    );
    const rows = resultQuery.rows;
    return res.status(201).json(rows);
  } catch (error) {
    return res.status(401).json(error);
  }
};
