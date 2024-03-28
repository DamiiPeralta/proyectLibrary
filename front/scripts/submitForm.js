const clear = require("./clearForm");
const post = require("./post.js");

const submit = () => {
  const title = document.getElementById("titleForm").value;
  const year = document.getElementById("yearForm").value;
  const author = document.getElementById("authorForm").value;
  const publisher = document.getElementById("publisherForm").value;
  const conver = document.getElementById("converForm").value;
  const checkGenre = checkArr();
  const genre = ["accion", "qsy"];
  if (!title || !year || !author || !publisher || !conver) {
    return alert("Debes completar todos los datos para continuar");
  } else post({ title, year, author, publisher, genre, conver });
  clear();
};

module.exports = submit;
