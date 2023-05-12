const logged = (req,res,next) => {
    if(req.session.admLogged) {
        next()
    } else {
        res.redirect('/admin/login')
    }
}

module.exports = logged