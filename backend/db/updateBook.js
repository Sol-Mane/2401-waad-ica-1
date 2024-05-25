const db = require("./db");

module.exports = async function updateBook(updatedBook, isbn) {
  try {
    const result = await db.pool.query(
      `UPDATE books
         SET title = $1,
             author = $2,
             genre = $3,
         WHERE isbn = $4`,
      [updatedBook.title, updatedBook.author, updatedBook.genre, isbn]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({ message: "Book updated successfully" });
  } catch (err) {
    console.error(err.message);
    throw new Error();
    res.status(500).json({ error: "Internal server error" });
  }
};
