require("./navBar.js");
const clear = require("./clearForm");
const submit = require("./submitForm.js");

document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});

document.getElementById("reset")?.addEventListener("click", (event) => {
  event.preventDefault();
  clear();
});

const search = require("./search");
document.getElementById('searchBtn').addEventListener('click', (event)=> {
  event.preventDefault();
  search();
});