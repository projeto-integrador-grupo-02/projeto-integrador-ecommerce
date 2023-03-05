const AdminPagesController = {
    showLogin: (req,res) => {
        res.render('admin-login.ejs')
    },
    showRegister: (req,res) => {
        res.render('admin-register.ejs')
    }
} 

module.exports = AdminPagesController