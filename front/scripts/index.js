const axios = require("axios");
const render = require("./render");
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
