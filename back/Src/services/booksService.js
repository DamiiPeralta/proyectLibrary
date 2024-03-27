const Book=require('../models/Book')

const getBooksService=async ()=>{
    try {
        const books=await Book.find();
        return books
    } catch (error) {
        throw new Error('Error al obtener las peliculas. ', error)
    }
}

const postBookService =async(book)=>{
    try {
        const newBook=await Book.create(book);
        return newBook;
    } catch (error) {
        throw new Error('Error al crear la pelicula. ',error)
        
    }
}
module.exports={
    getBooksService,
    postBookService
}