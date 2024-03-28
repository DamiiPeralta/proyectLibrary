const axios = require("axios");

const post = async (obj) => {
  try {
    await axios.post("http://localhost:3000/libros", obj);
    alert("post realizado");
  } catch (error) {
    alert("error al crear");
  }
};

module.exports = post;
