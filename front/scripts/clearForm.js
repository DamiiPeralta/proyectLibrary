const clear = () => {
  document.getElementById("titleForm").value = "";
  document.getElementById("yearForm").value = "";
  document.getElementById("authorForm").value = "";
  document.getElementById("publisherForm").value = "";
  document.getElementById("coverForm").value = "";
  const checkboxes = document.querySelectorAll('input[name="genre[]"]:checked');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

module.exports = clear;
