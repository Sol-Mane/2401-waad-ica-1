const db = require("./db");

module.exports = async function getBooks(queryString) {
  const { genre, author, title } = queryString;

  if (!genre && !title && !author) {
    try {
      const { rows } = await db.pool.query(
        "SELECT books.*, genres.name as genre, authors.name as author FROM books LEFT JOIN genres ON books.genre_id = genres.id LEFT JOIN authors ON books.author_id = authors.id"
      );
      return rows;
    } catch (err) {
      console.error(err);
    }
    return; // Return to exit the handler function
  }

  if (genre) {
    const { rows } = await db.pool.query(
      "SELECT books.*, genres.name as genre, authors.name as author FROM books LEFT JOIN genres ON books.genre_id = genres.id LEFT JOIN authors ON books.author_id = authors.id WHERE genres.name ILIKE $1",
      [genre]
    );
    return rows;
  }

  if (author) {
    const { rows } = await db.pool.query(
      "SELECT books.*, genres.name as genre, authors.name as author FROM books LEFT JOIN genres ON books.genre_id = genres.id LEFT JOIN authors ON books.author_id = authors.id WHERE authors.name ILIKE $1",
      [author]
    );
    return rows;
  }

  if (title) {
    const { rows } = await db.pool.query(
      "SELECT books.*, genres.name as genre, authors.name as author FROM books LEFT JOIN genres ON books.genre_id = genres.id LEFT JOIN authors ON books.author_id = authors.id WHERE title ILIKE $1",
      [title]
    );
    return rows;
  }
};
