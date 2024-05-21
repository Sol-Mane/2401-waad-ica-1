const express = require("express");

const booksController = new express.Router();
const getBooks = require("../db/getBooks");
const deleteBook = require("../db/deleteBook");

booksController.get("/", async (req, res) => {
  const books = await getBooks(req.query);

  res.json(books);
});

booksController.delete("/delete_book", async (req, res) => {
  const { isbn } = req.body;

  const response = await deleteBook(isbn);

  res.send(response);
});

module.exports = booksController;
