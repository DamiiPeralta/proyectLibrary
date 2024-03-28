const booksValidation = require('../utils/validations/booksValidations');

function bookMiddleware(req, res, next){
    
    const { title,year,autor,publisher,genre,cover } = req.body

    const errorObject = booksValidation({
        title,
        year,
        autor,
        publisher,
        genre,
        cover

    });
    if (errorObject.error){
        next(errorObject);
    } else {
        next();
    }
}

module.exports = bookMiddleware;