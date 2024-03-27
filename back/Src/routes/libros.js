const {Router} = require('express')
const {getBook, postBook} = require('../controllers/bookControllers')
const validateBook = require('../middlewares/validarLibro')

const books=router()

books.get('/', getBook)
books.post('/', validateBook, postBook)

module.exports = books