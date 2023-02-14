const ProdutosServices = require('../../../services/ProdutosServices')

const AdminProductsController = {
  /* showIndex: (req, res) => {res.render('dashboard-admin.ejs')}, */

    showProducts: (req, res) => {
      const produtos = ProdutosServices.showProdutos()

    res.render('dashboard-admin.ejs', { produtos })
  },
    createProduct: (req, res) => {
      res.render('create-admin.ejs')
    },
    
    registerProduct: (req,res) => {
      console.log(req.body)
      let produto = {
        image: req.body.image,
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        quantity: Number(req.body.quantity)
    }
      ProdutosServices.createProduct(produto)
      res.redirect('/admin/products')

  }
}




module.exports = AdminProductsController