const db = require("./db");

module.exports = async function addBook(newBook) {
  await db.pool.query(
    "INSERT INTO books (isbn, title, author, genre, cover_url) VALUES ($1, $2, $3, $4, $5)",
    [
      newBook.isbn,
      newBook.title,
      newBook.author,
      newBook.genre,
      newBook.cover_url,
    ]
  );
};
