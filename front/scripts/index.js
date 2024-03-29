require("./navBar.js");
require("./view.js");
const clear = require("./clearForm");
const submit = require("./submitForm.js");
const get = require("./get");

get();

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});

document.getElementById("reset")?.addEventListener("click", (event) => {
  event.preventDefault();
  clear();
});
