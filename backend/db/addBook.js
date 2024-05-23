const db = require("./db");

module.exports = async function addBook(newBook) {
  const { rows: authors } = await db.pool.query(
    "INSERT INTO authors(name) VALUES ($1) RETURNING *",
    [newBook.author]
  );

  const { rows: genres } = await db.pool.query(
    "INSERT INTO genres(name) VALUES ($1) RETURNING *",
    [newBook.genre]
  );

  const { rows } = await db.pool.query(
    "INSERT INTO books (isbn, title, author_id, genre_id) VALUES ($1, $2, $3, $4)",
    [newBook.isbn, newBook.title, authors[0].id, genres[0].id]
  );

  return rows;
};
