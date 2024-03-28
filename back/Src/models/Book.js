const {Schema, model} = require ('mongoose');

const booksSchema = new Schema({

    name: { type: String, required: true },
    writer: { type: String, required: true },
    published: { type: String, required: true },
    poster: { type: String, required: true },
    pages: { type: Number, required: true },
    rate: { type: String, required: true },
    genre: { type: Array, required: true }
});

const Book = model('Book', booksSchema);

module.exports = Book;