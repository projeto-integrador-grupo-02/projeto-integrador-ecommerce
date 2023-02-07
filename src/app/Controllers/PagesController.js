const path = require('path');

const PagesController = {
    showIndex: (req, res) => res.render('home.ejs'),
    showUser: (req, res) => res.render('edituser.ejs')
}

    module.exports = PagesController