const { app, PORT } = require('./Src/services/server');
const dbConnection = require('./Src/config/dbconection');

dbConnection()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Servidor Express iniciado en el puerto ${PORT}`);
      });
})  
.catch((err) => console.log("Error al conectar a la Base de Datos"));
