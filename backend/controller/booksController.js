const express = require("express");

const booksController = new express.Router();
const getBooks = require("../db/getBooks");

booksController.get("/", async (req, res) => {
  const books = await getBooks(req.query);

  res.json(books);
});

module.exports = booksController;
