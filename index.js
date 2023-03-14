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
    secret: 'SEGREDO',
    resave: false,
    saveUninitialized: true
}))
servidor.use(function adicionaUserNoRender(req, res, next) {
    // De acordo com a documentação do express, o objeto res.locals pode ser usado para adicionar dados globais usados em todos os arquivos EJS
    // http://expressjs.com/en/api.html#res.locals
    res.locals.estaLogado = req.session?.estaLogado
    res.locals.usuarioLogado = req.session?.usuarioLogado
    next()
})

// Deixa o conteúdo das requisições via body mais fáceis de serem lidos e manipulados. Precisamos dessa linha para enviar formulários post
servidor.use(express.urlencoded({ extended: false }));
//Definir a public como pasta de arquivos estáticos
servidor.use(router)
// Fazer o servidor rodar
servidor.listen(3002)