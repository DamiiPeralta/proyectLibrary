function genresToArray() {
  const checkboxes = document.querySelectorAll('input[name="genre[]"]:checked');

  // Inicializar un array para almacenar los generos seleccionados
  const selectedGenres = [];

  // Iterar sobre cada checkbox seleccionado y obtener su valor (el género)
  checkboxes.forEach((checkbox) => {
    selectedGenres.push(checkbox.value);
  });

  // Devolver el array de géneros seleccionados
  return selectedGenres;
}

const selectedGenres = genresToArray();
console.log(selectedGenres);
module.exports = genresToArray;