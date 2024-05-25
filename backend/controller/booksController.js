const express = require("express");

const booksController = new express.Router();
const getBooks = require("../db/getBooks");
const deleteBook = require("../db/deleteBook");
const addBook = require("../db/addBook");
const updateBook = require("../db/updateBook");
const verifyToken = require("../middleware/verifyToken");

booksController.get("/", async (req, res) => {
  const books = await getBooks(req.query);

  res.json(books);
});

// Protected routes have the verifyToken middleware
booksController.post("/new_book", verifyToken, async (req, res) => {
  const response = await addBook(req.body);

  res.json(response);
});

booksController.put("/:isbn", verifyToken, async (req, res) => {
  const { isbn } = req.params;

  await updateBook(req.body, isbn);
});

booksController.delete("/:isbn", verifyToken, async (req, res) => {
  const { isbn } = req.params;

  let response;

  try {
    response = await deleteBook(isbn);
  } catch (e) {
    if (e === "404") {
      return res.status(404).json({ error: "Book not found" });
    }
  }

  res.json();
});

module.exports = booksController;
