const {Router} = require('express')
const librosRouter= require('./libros')

const router = Router()

router.use('/libros' , librosRouter)

module.exports = router