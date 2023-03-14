const path = require('path');
const users = require('../../../databases/usuarios.json')
const fs = require('fs');
const bcrypt = require('bcrypt');


    const AuthController = {
        showRegister: (req, res) => res.render('cadastro.ejs'),
        showLogin:(req,res) => res.render('login.ejs'),
        registerUser:(req,res) => {
            const {nome,email,cpf,senha,data} = req.body;
            
            let id = 1;
            if(users.length > 0 ){
                id = users.at(-1).id + 1;
            }
            const senhaCriptografada = bcrypt.hashSync(senha,10);
            const newUser = {
                nome,
                email,
                cpf,
                senha:senhaCriptografada,
                data,
                id
            }
            users.push(newUser);
            fs.writeFileSync(path.join(__dirname,'..','..','..','databases','usuarios.json'),JSON.stringify(users,null,4))
            res.redirect("/");
        },
        login:(req,res) => {    
            const {email, senha}= req.body;
            
            let user = users.find(user => user.email === email);
            
            if(user === undefined){
                return res.send("falha no login");
            }
            const senhaVerify = bcrypt.compareSync(senha,user.senha);
            if(!senhaVerify){
                // return res.send("falha no login");
            }
            try {
                req.session.estaLogado = true
                req.session.usuarioLogado = user
                console.log(req.session);
                res.redirect("/");
                
            } catch (error) {
                console.log(error);
            }


        },
        logout:(req,res)=>{
            try {
                req.session.estaLogado = false;
                req.session.usuarioLogado = undefined;
                res.redirect("/")
                
            } catch (error) {
                console.log(error);
            }

        }
        
        

    }
    module.exports = AuthController;