const {Administrador} = require('../databases/models')
const path = require('path')
const fs = require('fs')

function salvar() {
    const adminData = path.resolve(__dirname + "/../databases/administradores.json");

    fs.writeFileSync(adminData, JSON.stringify(admin, null, 4));
}

async function listAdmin(page, perPage, id) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    let admin

    if(id) {
        admin = await Administrador.findByPk(id)
        admin = [admin]
    } else {
        admin = await Administrador.findAll()
    }

    let AdminPaginados = admin.slice(startIndex, endIndex);
    const totalPages = Math.ceil(admin.length / perPage);

    return {
        AdminPaginados,
        totalPages
    }
}

function createAdmin(adm) {
    if(admin.length > 0) {
        adm.id = admin[admin.length - 1].id + 1
    } else {
        adm.id = 1
    }

    admin.push(adm)

    salvar()
}

function loadAdm(idP) {
    let adm = admin.find(p => p.id == idP)

    return adm
}

function loadAdmEmail(email) {
    let adm = admin.find(p => p.email == email)

    return adm
}


function editAdmin() {
    
}

function eraseControl(idP) {
    let adm = admin.findIndex(p => p.id == idP)

    admin.splice(adm,1)

    salvar()


}

function updateAdmin(idP, admData) {
    let adm = admin.find(a => a.id == idP)

    adm.name = admData.name
    adm.email = admData.email

    salvar()
}

function loginEmail(emailD) {
    let email = admin.find(p => p.email == emailD)

    return email
}

function loginPass(email) {
    let adm = admin.find(p => p.email == email)
    let passHashed = adm.password
    
    return passHashed
}

function loginName(email) {
    let adm = admin.find(e => e.email == email)
    let admLogged = adm.name

    return admLogged
}  


module.exports = {
    listAdmin,
    updateAdmin,
    loadAdm,
    createAdmin,
    eraseControl,
    loginEmail,
    loginPass,
    loginName,
    loadAdmEmail
}