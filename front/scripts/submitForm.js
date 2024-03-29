const clear = require("./clearForm");
const post = require("./post.js");
const genresToArray = require("./genresToArray.js")

const submit = () => {
  const title = document.getElementById("titleForm")?.value;
  const year = document.getElementById("yearForm")?.value;
  const author = document.getElementById("authorForm")?.value;
  const publisher = document.getElementById("publisherForm")?.value;
  const cover = document.getElementById("coverForm")?.value;
  const genre = genresToArray();
  if (!title || !year || !author || !publisher || !cover) {
    return alert("Debes completar todos los datos para continuar");
  } else post({ title, year, author, publisher, genre, cover });
  clear();
};

module.exports = submit;
