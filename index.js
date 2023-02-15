// Importar o express
const express = require('express')
const services = require('./services/users')
const path = require('path')


// Criar o servidor
const servidor = express()

//Definir a public como pasta de arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')))

//Definir as rotas
servidor.get(
    '/home',   // endereço ou caminho a receber requisição
    (req,res) =>{          // função a ser executada
      return res.sendFile(__dirname + '/views/home.html')
    }  
)

servidor.get(
  '/editarcadastro',   // endereço ou caminho a receber requisição
  (req,res) =>{          // função a ser executada
    return res.sendFile(__dirname + '/views/edituser.html')
  }  
)

servidor.get(
  '/produtos',   // endereço ou caminho a receber requisição
  (req,res) =>{          // função a ser executada
    return res.sendFile(__dirname + '/views/products.html')
  }  
)

servidor.get(
  '/cadastro',   // endereço ou caminho a receber requisição
  (req,res) =>{          // função a ser executada
    return res.sendFile(__dirname + '/views/cadastro.html')
  }  
)
//novo
servidor.get('/login',(req,res)=>{
  return res.sendFile(__dirname + '/views/login.html')
})

// Fazer o servidor rodar

servidor.listen(3002)