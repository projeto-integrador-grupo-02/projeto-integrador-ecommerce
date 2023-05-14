const { Cliente } = require('../databases/models')
const { Pedido } = require('../databases/models')
const path = require('path')
const fs = require('fs')


async function listarClients() {
    const clients = await Cliente.findAll()

    return clients
}

function eraseClient(idP) {
    let posicao = clients.findIndex(p => p.id == idP)

    if (posicao == -1) {
        throw new Error('Não existe esse produto')
    }
    clients.splice(posicao, 1)
    salvar()
}
// TODO: Converter para sequelize
async function salvar() {
    const clientsData = path.resolve(__dirname + "/../databases/usuarios.json");

    fs.writeFileSync(clientsData, JSON.stringify(clients, null, 4));
}

async function listClients(page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;
    const clients = await Cliente.findAll()
    let clientsPaginados = clients.slice(startIndex, endIndex);
    const totalPages = Math.ceil(clients.length / perPage);
    return {
        clientsPaginados,
        totalPages
    }
}

function pedidosLink() {
    const pedidos = Pedido.findAll()
    return pedidos
}

async function loadClient(idP) {
    let cliente = await Cliente.findOne({ where: { id_cliente: idP } })
    if (cliente == undefined) {
        throw new Error('Não existe esse cliente')
    }
    return cliente
}

function updateClient(idP, clientData) {
    let cliente = clients.find(p => p.id == idP)

    if (cliente == undefined) {
        throw new Error('Não existe esse cliente')
    }

    cliente.name = clientData.name
    cliente.email = clientData.email

    salvar()

}
async function loginClient(data) {

    console.log("data", data)
    try {
        const user = await Cliente.findAll({
            where: {
                email: data.email,
                senha_cliente: data.senha_cliente
            }

        });
        console.log(user[0])

        if (user[0]) {
            console.log("Login bem-sucedido!");
            // Faça qualquer ação necessária após o login bem-sucedido
            return user;
        } else {
            console.log("Credenciais inválidas");
            // Lida com o caso em que as credenciais de login são inválidas
            return false;
        }
    } catch (error) {
        console.log("Erro no login:", error);
        // Lida com quaisquer erros que ocorram durante o processo de login
    }
}

async function createClient(data) {
    try {
        const user = await Cliente.create({
            nome: data.nome,
            email: data.email,
            senha_cliente: data.senha_cliente,
            data_nascimento: data.data_nascimento
        })
        console.log(user);
    } catch (error) {
        console.log("erro no cadastro", error);
    }
}
async function login(data) {
    try {
        const user = await Cliente.findOne({
            email: data.email,
            senha_cliente: data.senha_cliente
        });

        if (user) {
            console.log("Login bem-sucedido!");
            // Armazena as informações do usuário na sessão
            req.session.user = {
                id: user._id,
                nome: user.nome,
                email: user.email,
                data_nascimento: user.data_nascimento
            };
            // Faça qualquer ação necessária após o login bem-sucedido
        } else {
            console.log("Credenciais inválidas");
            // Lida com o caso em que as credenciais de login são inválidas
        }
    } catch (error) {
        console.log("Erro no login:", error);
        // Lida com quaisquer erros que ocorram durante o processo de login
    }
}

module.exports = {
    loginClient,
    createClient,
    listClients,
    pedidosLink,
    loadClient,
    updateClient,
    listarClients,
    eraseClient
}
