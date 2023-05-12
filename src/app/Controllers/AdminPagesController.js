const AdminServices = require('../../../services/AdminServices')
const bcrypt = require('bcrypt')

const AdminPagesController = {
    
    loginControl:(req, res) => {
        let email = req.body.email
        let password = req.body.password
        
        const hashedPassword = AdminServices.loginPass(email)

        if(AdminServices.loginEmail(email) == undefined) {
            res.send("Falha no login");
            
        }

        const senhaOk = bcrypt.compareSync(password, hashedPassword);
        if(!senhaOk) {
            res.send("Falha no login");
        }

        console.log(password + AdminServices.loginPass(email));
        req.session.admLogged = true;
        
        req.session.admin = {
            name: AdminServices.loadAdmEmail(email).name
        };

        res.redirect('/admin')

    },

    showLogin: (req,res) => {
        if(req.session.admLogged) {
            res.send('logado')
        } else {
            res.render('admin-login.ejs')
        }

    },

    showRegister: (req,res) => {
        res.render('admin-register.ejs')
    },
    registerControl: (req,res) => {
        let administrador = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        AdminServices.createAdmin(administrador)

        res.redirect('/admin/admin-user')
    },

    showControl: (req,res) => {
        const page = parseInt(req.query.page) || 1
        const perPage = 5
        const currentPage = parseInt(page)
        const admin = AdminServices.listAdmin(currentPage, perPage)
        const { AdminPaginados, totalPages } = AdminServices.listAdmin(page, perPage);
        res.render('admin-control.ejs', { admin: AdminPaginados, totalPages, currentPage: page})
    },
    controlEdit:(req,res) => {
        let id = req.params.id

        let adm = AdminServices.loadAdm(id)

        res.render('admin-control-edit.ejs', {adm})
        
    },

    controlDelete:(req,res) => {
        let id = req.params.id

        AdminServices.eraseControl(id)

        res.redirect('/admin/admin-user')
    },

    updateAdmin:(req,res)=> {
        let id = req.params.id

        let adm = {
            name: req.body.name,
            email: req.body.email
        }

        AdminServices.updateAdmin(id, adm)

        res.redirect('/admin/admin-user')
    }
} 

module.exports = AdminPagesController