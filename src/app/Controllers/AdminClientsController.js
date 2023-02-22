const ClientsServices = require('../../../services/ClientsServices')


const AdminClientsController = {
    
    listClients: (req, res) => {
        
        const pedidos = ClientsServices.pedidosLink()
        const page = parseInt(req.query.page) || 1
        const perPage = 5
        const currentPage = parseInt(page)
        const clients = ClientsServices.listClients(currentPage, perPage)
        const { clientsPaginados, totalPages } = ClientsServices.listClients(page, perPage);
        res.render('clients-list-adm.ejs', { clients: clientsPaginados, totalPages, currentPage: page, pedidos})
    
      },
    editClients: (req,res) => {
        let id = req.params.id
        let client = ClientsServices.loadClient(id)
        let clients = ClientsServices.listarClients()

        res.render('edit-user-admin', {client, clients})

    },
    updateClients: (req,res) => {
        let id = req.params.id
        let client = {
            name: req.body.name,
            email: req.body.email
        }

        ClientsServices.updateClient(id, client)

        res.redirect('/admin/clients')

    },
    deleteClients: (req,res) => {
        let id = req.params.id
        let client = ClientsServices.eraseClient(id)

        res.redirect('/admin/clients')

    }
}

module.exports = AdminClientsController;