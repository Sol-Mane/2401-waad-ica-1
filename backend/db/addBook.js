const db = require("./db");

module.exports = async function addBook(newBook) {
  await db.pool.query(
    "INSERT INTO books (isbn, title, author, publisher, publisher_city, year_of_publication, genre, base64_encoded_cover) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [
      newBook.isbn,
      newBook.title,
      newBook.author,
      newBook.publisher,
      newBook.publisher_city,
      newBook.year_of_publication,
      newBook.genre,
      newBook.base64_encoded_cover,
    ]
  );
};
