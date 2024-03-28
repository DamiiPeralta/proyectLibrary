const get = require("./get");

document.getElementById("btnExplorar")?.addEventListener("click", () => {
  document.getElementById("books").style.display = "block";
  document.getElementById("formAdd").style.display = "none";
  document.getElementById("reservation").style.display = "none";
  get();
});

document.getElementById("btnAgregar")?.addEventListener("click", () => {
  document.getElementById("formAdd").style.display = "flex";
  document.getElementById("reservation").style.display = "none";
  document.getElementById("books").style.display = "none";
});
document.getElementById("btnReserva")?.addEventListener("click", () => {
  document.getElementById("reservation").style.display = "block";
  document.getElementById("formAdd").style.display = "none";
  document.getElementById("books").style.display = "none";
});
