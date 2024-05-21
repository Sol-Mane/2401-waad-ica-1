const express = require("express");

const booksController = new express.Router();
const getBooks = require("../db/getBooks");
const deleteBook = require("../db/deleteBook");
const addBook = require("../db/addBook");

booksController.get("/", async (req, res) => {
  const books = await getBooks(req.query);

  res.json(books);
});

// Protected routes add somekind of middleware
booksController.post("/create_book", async (req, res) => {
  const response = await addBook(req.body);
});

booksController.patch("/update_book", async (req, res) => {});

booksController.delete("/delete_book", async (req, res) => {
  const { isbn } = req.body;

  const response = await deleteBook(isbn);

  res.json(response);
});

module.exports = booksController;
