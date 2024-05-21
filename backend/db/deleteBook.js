const db = require("./db");

module.exports = async function deleteBook(isbn) {
  return await db.pool.query("DELETE books WHERE isbn = $1", [isbn]);
};
