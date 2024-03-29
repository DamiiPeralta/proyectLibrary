function genresToArray() {
  const checkboxes = document.querySelectorAll('input[name="genre[]"]:checked');
  const selectedGenres = [];
  checkboxes.forEach((checkbox) => {
    selectedGenres.push(checkbox.value);
  });
  return selectedGenres;
}

module.exports = genresToArray;