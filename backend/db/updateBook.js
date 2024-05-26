const db = require("./db");

module.exports = async function updateBook(updatedBook, isbn) {
  try {
    const result = await db.pool.query(
      `UPDATE books
         SET title = $1
         WHERE isbn = $2 RETURNING *`,
      [updatedBook.title, isbn]
    );

    if (result.rowCount === 0) {
      throw new Error("Empty");
    }

    return result;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
