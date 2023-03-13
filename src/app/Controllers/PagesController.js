const path = require('path');


const PagesController = {
    showIndex: (req, res) => res.render('home.ejs'),
    showUser: (req, res) => res.render('edituser.ejs'),
    showProducts: (req, res) => res.render('products.ejs'),
    checkoutUser: (req,res) => res.render('checkout.ejs'),
    checkoutSucess: (req,res) => res.render('checkoutSucess.ejs')
    
    
}

    module.exports = PagesController