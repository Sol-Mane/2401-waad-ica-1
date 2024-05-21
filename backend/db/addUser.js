const db = require("./db");

module.exports = async function addUser(username, hashed_password) {
  return await db.pool.query(
    "INSERT INTO users (username, hashed_password) VALUES ($1, $2)",
    [username, hashed_password]
  );
};
