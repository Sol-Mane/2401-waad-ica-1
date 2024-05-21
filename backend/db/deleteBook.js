const db = require("./db");

module.exports = async function deleteBook(isbn) {
  const { rows } = await db.pool.query(
    "DELETE FROM books WHERE isbn = $1 RETURNING *",
    [isbn]
  );

  if (rows.length === 0) {
    throw new Error("404");
  }

  return rows;
};
