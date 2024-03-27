const {
    getBooksService,
    postBooksService
}=require('../services/booksService');

const getBooksControllers=async(req,res)=>{
    const books= await getBooksService();
    res.status(200).json(movies);
}
const postBookController= async (req,res)=>{
    try{
        const bookData=req.body;
        console.log('Datos recibidos',bookData);
        await postBooksService(bookData);
        res.status(201).send({message:'Libro creado exitosamente'})
    }
    catch(error){
        console.log('Error al procesar la solicitud: ',error);
        res.status(500).send({message:'Error al procesar la solicitud'})
    }
}

module.export={getBooksControllers,postBookController}