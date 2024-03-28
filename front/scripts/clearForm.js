const clear = () => {
  document.getElementById("titleForm").value = "";
  document.getElementById("yearForm").value = "";
  document.getElementById("authorForm").value = "";
  document.getElementById("publisherForm").value = "";
  document.getElementById("coverForm").value = "";
};

module.exports = clear;
