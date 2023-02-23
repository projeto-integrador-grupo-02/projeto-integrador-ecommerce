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
        res.render('orders-list-admin.ejs', { orders: ordersPaginados, totalPages, currentPage: page, clients })
    },

    listOrderClient: (req, res) => {
        let id = req.params.id
        let order = OrdersServices.loadOrder(id)
        let client = ClientsServices.loadClient(order.contactPerson)
        let usuario = client.name
        /* let items = OrdersServices.loadProductClient(order.items) */
        let items = OrdersServices.loadItemsClient(id)
       
        
        res.render('order-client-admin.ejs', {order: order, usuario, items})
    }
}



module.exports = AdminOrdersController