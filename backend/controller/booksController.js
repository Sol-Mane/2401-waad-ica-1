const express = require("express");

const booksController = new express.Router();
const getBooks = require("../db/getBooks");
const deleteBook = require("../db/deleteBook");
const addBook = require("../db/addBook");
const updateBook = require("../db/updateBook");

booksController.get("/", async (req, res) => {
  const books = await getBooks(req.query);

  res.json(books);
});

// Protected routes add somekind of middleware
booksController.post("/create_book", async (req, res) => {
  const response = await addBook(req.body);
});

booksController.put("/:isbn", async (req, res) => {
  const { isbn } = req.params;

  await updateBook(req.body, isbn);
});

booksController.delete("/delete_book", async (req, res) => {
  const { isbn } = req.body;

  const response = await deleteBook(isbn);

  res.json(response);
});

module.exports = booksController;
