// Importar o express
const express = require('express')
const services = require('./services/users')
const path = require('path')
const router = require('./router.js')
const bodyParser = require('body-parser');
const servidor = express()
const session = require('express-session');

servidor.use(session({
    secret: 'SEGREDO',
    resave: false,
    saveUninitialized: false
}))

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended: false }));


// Criar o servidor

servidor.set('view engine', 'ejs')

//Definir a public como pasta de arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')))
servidor.use(router)


servidor.listen(3002);