const globalVar = (req, res, next) => {
    if(req.session.admLogged) {
        res.locals.adm = req.session.admin.name
        next()
    } else {
        res.redirect('/admin/login')
    }
}

module.exports = globalVar
