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

  // let query = "SELECT * FROM books WHERE 1=1";
  // const queryParams = [];

  // if (genre) {
  //   queryParams.push(genre);
  //   query += ` AND genre = $${queryParams.length}`;
  // }

  // if (title) {
  //   queryParams.push(`%${title}%`);
  //   query += ` AND title ILIKE $${queryParams.length}`;
  // }

  // if (author) {
  //   queryParams.push(`%${author}%`);
  //   query += ` AND author ILIKE $${queryParams.length}`;
  // }

  // try {
  //   const { rows } = await db.pool.query(query);
  //   console.log(rows);
  //   return rows;
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ error: "Internal Server Error" });
  // }
};
