// Importar o express
const express = require('express')
const services = require('./services/users')
const path = require('path')
const router = require('./router')
const session = require('express-session')

// Criar o servidor
const servidor = express()
servidor.set('view engine', 'ejs')
servidor.use(express.static(path.join(__dirname, 'public')))
servidor.use(session({
    secret:'SEGREDO',
    resave: false,
    saveUninitialized: false
}))
servidor.use(function addUserRender(req,res,next){
    console.log("qualquer coisa");
    res.locals.userEmail = req.session.userEmail;
    console.log(res.locals);
    next();
})

// Deixa o conteúdo das requisições via body mais fáceis de serem lidos e manipulados. Precisamos dessa linha para enviar formulários post
servidor.use(express.urlencoded({ extended: false }));
//Definir a public como pasta de arquivos estáticos
servidor.use(router)



// Fazer o servidor rodar

servidor.listen(3002)