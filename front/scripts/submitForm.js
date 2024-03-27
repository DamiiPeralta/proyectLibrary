const clear = require("./clearForm");
const checkArr = require("");
const post = require("./post");

const submit = () => {
  const title = document.getElementById("").value;
  const checkGenre = checkArr();
  const genre = createArrGenre();
  if (!title || !checkGenre) {
    return alert("Debes completar todos los datos para continuar");
  } else post({ title, genre });
  clear();
};

module.exports = submit;
