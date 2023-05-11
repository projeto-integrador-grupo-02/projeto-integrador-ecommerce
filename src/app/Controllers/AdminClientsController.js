const ClientsServices = require('../../../services/ClientsServices')


const AdminClientsController = {
    
    listClients: async (req, res) => {

        try {
            const page = parseInt(req.query.page) || 1
            const perPage = 5
            const currentPage = parseInt(page)
            const { clientsPaginados, totalPages } = await ClientsServices.listClients(currentPage, perPage);
            const pedidos = await ClientsServices.pedidosLink()
        
            res.render('clients-list-adm.ejs', { clients: clientsPaginados, totalPages, currentPage, pedidos})
        } catch {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao carregar a lista de clientes.");
        }
        
      },
    editClients: (req,res) => {
        let id = req.params.id
        let cliente = ClientsServices.loadClient(id)
        let clients = ClientsServices.listarClients()

        res.render('edit-user-admin', {cliente, clients})

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