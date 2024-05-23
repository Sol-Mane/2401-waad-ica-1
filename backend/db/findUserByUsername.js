const db = require("./db");

module.exports = async function findUserByUsername(username) {
  const { rows } = await db.pool.query(
    "SELECT * FROM users WHERE username = $1",
    [username]
  );

  return rows[0];
};
