const {Schema, model} = require ('mongoose');

const booksSchema = new Schema({

    // title: { type: String, required: true },
    // year: { type: Number, required: true },
    // author: { type: String, required: true },
    // publisher: { type: String, required: true },
    // genre: { type: [String], required: true },
    // conver: { type: String, required: true }
    title: { type: String},
    year: { type: Number },
    author: { type: String},
    publisher: { type: String},
    genre: { type: [String]},
    cover: { type: String}
});

const Book = model('Book', booksSchema);

module.exports = Book;