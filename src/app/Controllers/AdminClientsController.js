const ClientsServices = require('../../../services/ClientsServices')


const AdminClientsController = {
    /* showClients: (req,res) => {
        res.render('clients-list-adm.ejs')
    }, */
    listClients: (req, res) => {
        const page = parseInt(req.query.page) || 1
        const perPage = 5
        const currentPage = parseInt(page)
        const clients = ClientsServices.listClients(currentPage, perPage)
        const { clientsPaginados, totalPages } = ClientsServices.listClients(page, perPage);
        console.log(clients);
        res.render('clients-list-adm.ejs', { clients: clientsPaginados, totalPages, currentPage: page })
    
      }
}

module.exports = AdminClientsController;