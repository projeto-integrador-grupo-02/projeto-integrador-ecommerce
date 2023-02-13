const ProdutosServices = require('../../../services/ProdutosServices')

const AdminProductsController = {
  /* showIndex: (req, res) => {res.render('dashboard-admin.ejs')}, */

    showProducts: (req, res) => {
      const produtos = ProdutosServices.showProdutos()

    res.render('dashboard-admin.ejs', { produtos })
  },
    createProduct: (req, res) => {
      const createProduct = ProdutosServices.createProduct()

      res.render('create-admin.ejs')
  }
}




module.exports = AdminProductsController