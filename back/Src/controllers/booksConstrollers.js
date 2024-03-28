const {
  getBooksService,
  postBookService,
} = require("../services/booksService");

const getBooksControllers = async (req, res) => {
  const books = await getBooksService();
  res.status(200).json(books);
};
const postBookController = async (req, res) => {
  try {
    const bookData = req.body;
    console.log("Datos recibidos", bookData);
    await postBookService(bookData);
    res.status(201).json({ error: false, data: bookData });
  } catch (error) {
    console.log("Error al procesar la solicitud: ", error);
    res.status(500).send({ message: "Error al procesar la solicitud" });
  }
};

module.exports = { getBooksControllers, postBookController };
