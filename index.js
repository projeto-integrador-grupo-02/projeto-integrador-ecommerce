// Importar o express
const express = require('express')
const services = require('./services/users')
const path = require('path')
const router = require('./router')
const bodyParser = require('body-parser');
const servidor = express()

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended: false }));


// Criar o servidor

servidor.set('view engine', 'ejs')

//Definir a public como pasta de arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')))
servidor.use(router)





//novo
servidor.get('/login',(req,res)=>{
  return res.sendFile(__dirname + '/views/login.html')
})

// Fazer o servidor rodar

servidor.listen(3002)