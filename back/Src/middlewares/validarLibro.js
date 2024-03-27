const booksValidation = require('../utils/validations/booksValidations');
function bookMiddleware(req, res, next){
    const { name, writer, published, poster, pages, rate, genre } = req.body

    const errorObject = booksValidation({
        name,
        writer,
        published,
        poster,
        pages,
        rate,
        genre
    });
    if (errorObject.error){
        next(errorObject);
    } else {
        next();
    }
}

module.exports = bookMiddleware;