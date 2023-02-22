const OrdersServices = require('../../../services/OrdersServices')
const ClientsServices = require('../../../services/ClientsServices')

const AdminOrdersController = {
    
listOrders: (req, res) => {
    const clients = ClientsServices.listarClients()
    const page = parseInt(req.query.page) || 1
    const perPage = 5
    const currentPage = parseInt(page)
    const orders = OrdersServices.listOrders(currentPage, perPage)
    const { ordersPaginados, totalPages } = OrdersServices.listOrders(page, perPage);
    res.render('orders-list-admin.ejs', { orders: ordersPaginados, totalPages, currentPage: page, clients})
},

editOrders: (req, res) => {


},

updateOrders: (req, res) => {


},
deleteOrders: (req, res) => {


}
    }




module.exports = AdminOrdersController