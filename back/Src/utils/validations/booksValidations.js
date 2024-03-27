function booksValidation(bookObjet)
    {
        if (fieldsUndefined.length >0){
            return {
                error : true,
                statusCode: 400,
                typeError: "validation",
                fields: fieldsUndefined,
                message: `Estan faltando los siguientes datos: ${fieldsUndefined.join(", ")}`,
            };
        }
        if( bookObject.rate < 1 || bookObject.rate>10){
            return {
                statusCode: 400,
                typeError: "validation",
                fields: ["rate"],
                message: `El rate debe estar en un rango entre 1 y 10
                y estas pasando ${bookObjet.rate}`,
            };
        }
        return {
            error: false,
        };
    }