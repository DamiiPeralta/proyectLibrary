const axios = require("axios");
const render = require("./render");
const { dataToGenre } = require("./renderGenre");
require("./navBar");
require("./view");

const get = async () => {
  try {
    const { data } = await axios("http://localhost:3000/libros");
    render(data);
  } catch (error) {
    alert("error al solicitar los libros");
  }
};

get();

const sampleGenres= ["Novela","Romance","Ficción","Fantasía","Gastronomía","Arte","Aventura", "Terror","Poesía","Autoayuda","Psicología","Finanzas"]

window.onload = () =>{
  dataToGenre(sampleGenres)
};