const AdminServices = require('../../../services/AdminServices')

const AdminPagesController = {
    showLogin: (req,res) => {
        res.render('admin-login.ejs')
    },
    showRegister: (req,res) => {
        res.render('admin-register.ejs')
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
    updateAdmin:(req,res)=> {
        let admin = {
            name: req.body.name,
            email: req.body.email
        }
        res.redirect('admin-control.ejs')
    }
} 

module.exports = AdminPagesController