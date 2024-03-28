const createBook = require("./createBook");

const content = document.getElementById("cardsContainer");

const render = (arr) =>
  arr.forEach((obj) => {
    const book = createBook(obj);
    content.appendChild(book);
  });

module.exports = render;
