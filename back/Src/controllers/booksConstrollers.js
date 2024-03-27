const {
  getBooksService,
  postBooksService,
} = require("../services/booksService");

const getBooksControllers = async (req, res) => {
  const books = await getBooksService();
  res.status(200).json(books);
};
const postBookController = async (req, res) => {
  try {
    const bookData = req.body;
    console.log("Datos recibidos", bookData);
    await postBooksService(bookData);
    res.status(201).json({ error: false, data: bookData });
  } catch (error) {
    console.log("Error al procesar la solicitud: ", error);
    res.status(500).json({ error: true, message: error.message });
  }
};


module.exports = { getBooksControllers, postBookController };
