const db = require("./db");

module.exports = async function updateBook(updatedBook, isbn) {
  try {
    const result = await db.pool.query(
      `UPDATE books
         SET title = $1,
             author = $2,
             genre = $3,
             cover_url = $4
         WHERE isbn = $5`,
      [
        updatedBook.title,
        updatedBook.author,
        updatedBook.genre,
        updatedBook.cover_url,
        isbn,
      ]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({ message: "Book updated successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
