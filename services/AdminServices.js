const admin = require('../databases/administradores.json')
const path = require('path')
const fs = require('fs')

function salvar() {
    const adminData = path.resolve(__dirname + "/../databases/administradores.json");

    fs.writeFileSync(adminData, JSON.stringify(admin, null, 4));
}

function listAdmin(page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    const adminData = fs.readFileSync(path.resolve(__dirname, "../databases/administradores.json"));
    const admin = JSON.parse(adminData);
    let AdminPaginados = admin.slice(startIndex, endIndex);
    const totalPages = Math.ceil(admin.length / perPage);
    return {
        AdminPaginados,
        totalPages
    }
}

function loadAdm(idP) {
    let adm = admin.find(p => p.id == idP)

    return adm
}

function editAdmin() {
    
}

function updateAdmin(idP, admData) {
    let adm = admin.find(a => a.id == idP)

    adm.name = admData.name
    adm.email = admData.email

    salvar()
}

module.exports = {
    listAdmin,
    updateAdmin,
    loadAdm
}