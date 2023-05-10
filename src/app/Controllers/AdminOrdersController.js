const OrdersServices = require('../../../services/OrdersServices')
const ClientsServices = require('../../../services/ClientsServices')

const AdminOrdersController = {

    listOrders: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1
            const perPage = 5
            const currentPage = parseInt(page)
            const { ordersPaginados, totalPages } = await OrdersServices.listOrders(page, perPage);
            const clients = await ClientsServices.listarClients()
            const orders = OrdersServices.listOrders(currentPage, perPage)
            res.render('orders-list-admin.ejs', { orders: ordersPaginados, totalPages, currentPage: page, clients })
        }
        catch {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao carregar a lista de cliente e pedidos.");
        }
        
        
        
    },

    listOrderClient: async (req, res) => {
        let id = req.params.id
        let order = await OrdersServices.loadOrder(id)
        let client = await ClientsServices.loadClient(order.id_cliente)
        let usuario = await client.nome + ' ' + client.sobrenome
        let items = await OrdersServices.loadItemsClient(id)
       
        
        res.render('order-client-admin.ejs', {order: order, usuario, items})
    }
}



module.exports = AdminOrdersController