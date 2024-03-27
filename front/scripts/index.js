const axios = require("axios");
const render = require("./render");

const get = async () => {
  try {
    const { data } = await axios("");
    render(data);
  } catch (error) {
    throw new Error(alert("error al solicitar los libros"));
  }
};

get();
