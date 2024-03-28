const booksValidation = require('../utils/validations/booksValidations');

function bookMiddleware(req, res, next){
    
    const { title,year,autor,publisher,genre,conver } = req.body

    const errorObject = booksValidation({
        title,
        year,
        autor,
        publisher,
        genre,
        conver

    });
    if (errorObject.error){
        next(errorObject);
    } else {
        next();
    }
}

module.exports = bookMiddleware;