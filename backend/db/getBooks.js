const db = require("./db");

module.exports = async function getBooks(queryString) {
  const { genre, author, title } = queryString;

  if (!genre && !title && !author) {
    try {
      const { rows } = await db.pool.query("SELECT * FROM books");
      return rows;
    } catch (err) {
      console.error(err);
    }
    return; // Return to exit the handler function
  }

  if (genre) {
    const { rows } = await db.pool.query(
      "SELECT * FROM books LEFT JOIN genres ON books.genre_id = genres.id WHERE genre ILIKE $1",
      [genre]
    );
    return rows;
  }

  if (author) {
    const { rows } = await db.pool.query(
      "SELECT * FROM books LEFT JOIN authors ON books.author_id = authors.id WHERE author ILIKE $1",
      [author]
    );
    return rows;
  }

  if (title) {
    const { rows } = await db.pool.query(
      "SELECT * FROM books WHERE title ILIKE $1",
      [title]
    );
    return rows;
  }
};
