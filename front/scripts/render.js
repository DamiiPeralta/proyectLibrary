const createBook = require("./createBook");

const content = document.getElementById("cardsContainer");

const render = (arr) =>{
  content.innerHTML = '';
  arr.forEach((obj) => {
    const book = createBook(obj);
    content.appendChild(book);
  })};

module.exports = render;
