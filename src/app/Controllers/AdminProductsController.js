const ProdutosServices = require('../../../services/ProdutosServices')

const AdminProductsController = {
  /* showIndex: (req, res) => {res.render('dashboard-admin.ejs')}, */

  showHomeAdmin: (req, res) => {
    res.render('dashboard-admin.ejs')
  },

  /* showProducts: (req, res) => {
    const produtos = ProdutosServices.showProdutos()

  res.render('products-list-admin.ejs', { produtos })

}, */
  createProduct: (req, res) => {
    res.render('create-admin.ejs')
  },

  registerProduct: (req, res) => {
    let produto = {
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price),
      quantity: Number(req.body.quantity)
    }
    //salvar obj no array de produtos
    ProdutosServices.createProduct(produto)
    res.redirect('/admin/products')

  },
  editProduct: (req, res) => {
    let id = req.params.id

    let produto = ProdutosServices.loadProduct(id)
    res.render('edit-admin.ejs', { produto })
  },
  updateProduct: (req, res) => {
    let id = req.params.id

    let produto = {
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price),
      quantity: Number(req.body.quantity)
    }

    ProdutosServices.updateProduct(id, produto)


    res.redirect('/admin/products')

  },

  deleteProduct: (req, res) => {
    let id = req.params.id
    let produto = ProdutosServices.eraseProduct(id)

    res.redirect('/admin/products')
  },

  listProducts: (req, res) => {
    const page = parseInt(req.query.page) || 1
    const perPage = 5
    const currentPage = parseInt(page)
    const produtos = ProdutosServices.listProducts(currentPage, perPage)
    const { produtosPaginados, totalPages } = ProdutosServices.listProducts(page, perPage);

    res.render('products-list-admin.ejs', { produtos: produtosPaginados, totalPages, currentPage: page })

  }
}




module.exports = AdminProductsController