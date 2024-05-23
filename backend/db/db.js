const pg = require("pg");

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.PG_CONNECTION_STRING,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
