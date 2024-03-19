import pgk from "pg";
import dotenv from "dotenv";

const { Pool } = pgk;

const pool = new Pool({
  host: process.env.POSTGRE_HOST,
  port: process.env.POSTGRE_PORT,
  database: process.env.POSTGRE_DATABASE,
  user: process.env.POSTGRE_USER,
  password: process.env.POSTGRE_PASSWORD,
});

export const createTables = async () => {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS customers(id SERIAL PRIMARY KEY, name TEXT, password TEXT)"
  );
};

export default pool;
