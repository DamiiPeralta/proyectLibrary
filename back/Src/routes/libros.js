const { Router } = require("express");
const {
  getBooksControllers,
  postBookController,
} = require("../controllers/booksConstrollers");
// const validateBook = require("../middlewares/validarLibro");

const books = Router();

books.get("/", getBooksControllers);
// books.post('/', validateBook, postBookController)
books.post("/", postBookController);

module.exports = books;