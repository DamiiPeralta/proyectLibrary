const { app, PORT } = require('./Src/services/server');
const dbConnection = require('./Src/config/dbconection');

dbConnection()
.then(()=>{
    app.listen(PORT, () => {
        console.log(`Servidor Express iniciado en el puerto ${PORT}`);
      });
})