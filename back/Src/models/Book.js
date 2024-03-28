const {Schema, model} = require ('mongoose');

const booksSchema = new Schema({

    title: { type: String, required: true },
    year: { type: Number, required: true },
    autor: { type: String, required: true },
    publisher: { type: String, required: true },
    genre: { type: Array, required: true },
    conver: { type: String, required: true }
});

const Book = model('Book', booksSchema);

module.exports = Book;