import pgk from "pg";

const { Pool } = pgk;

const pool = new Pool({
  host: "dpg-cns3sbq0si5c73c235sg-a",
  port: 5432,
  database: "parkingapp",
  user: "parkingapp_user",
  password: "V5mn64dabA0IsoGUGdVTc5Bgmn5I54nP",
});

export const createTable = async () => {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS costumer(id SERIAL PRIMARY KEY, title TEXT, price INT)"
  );
};

export default pool;
