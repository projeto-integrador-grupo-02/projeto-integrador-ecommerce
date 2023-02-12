const path = require('path');

const PagesController = {
    showIndex: (req, res) => res.render('home.ejs'),
    showUser: (req, res) => res.render('edituser.ejs'),
    showProducts: (req, res) => res.render('products.ejs'),
    registerUser: (req, res) => res.render('cadastro.ejs')
}

    module.exports = PagesController