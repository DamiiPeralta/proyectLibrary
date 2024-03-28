const express = require('express');
const morgan= require ("morgan");
const cors = require ("cors");
const router = require("../routes/index");

const app = express()
const PORT = 3000; 

app.use(morgan('dev')); //Registro de solicitudes HTTP

app.use(cors()); //Desde que dominio podes acceder a esta aplicacion.(protocolo de seguridad)

app.use(express.json()); //Este middleware se utiliza para transforma datos en formato .Json y transformarlos en objetos javaScript.

app.use(router)


module.exports = { app, PORT };