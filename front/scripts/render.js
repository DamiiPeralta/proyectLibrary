const createBook = require("./");

const content = document.getElementById("");

const render = (arr) =>
  arr.forEach((obj) => {
    const book = createBook(obj);
    content.appendChild(book);
  });

module.exports = render;
