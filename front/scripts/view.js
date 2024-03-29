const btnView = document.getElementById("openModal");

btnView?.addEventListener("click", () => {
  document.getElementById("modalBook").style.display = "block";
});

btnExitView = document.getElementById("exitView");

btnExitView?.addEventListener("click", () => {
  document.getElementById("modalBook").style.display = "none";
});
