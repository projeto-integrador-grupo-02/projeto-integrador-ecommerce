const AdminServices = require('../../../services/AdminServices')
const bcrypt = require('bcrypt')

const AdminPagesController = {
    showLogin: (req,res) => {
        res.render('admin-login.ejs')
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