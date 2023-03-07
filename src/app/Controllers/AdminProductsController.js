const fs = require('fs')
const ProdutosServices = require('../../../services/ProdutosServices')

const AdminProductsController = {

  showHomeAdmin: (req, res) => {
    res.render('dashboard-admin.ejs')
  },

  createProduct: (req, res) => {
    res.render('create-admin.ejs')
  },

  registerProduct: (req, res) => {
    let novoNome = req.body.name.replace(' ', '-').toLowerCase() + '.jpg';
    fs.renameSync(req.file.path, `public/img/${novoNome}`)

    let produto = {
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price),
      quantity: Number(req.body.quantity),
      image: `/img/${novoNome}`
    }
    //salvar obj no array de produtos
    ProdutosServices.createProduct(produto)
    res.redirect('/admin/products')

  },
  editProduct: (req, res) => {
    let id = req.params.id

    let produto = ProdutosServices.loadProduct(id)
    let categorias = ProdutosServices.showCategorias()

    res.render('edit-admin.ejs', { produto, categorias: categorias })
  },
  
  updateProduct: (req, res) => {
    let novoNome = req.body.name.replace(' ', '-').toLowerCase() + '.jpg';
    fs.renameSync(req.file.path, `public/img/${novoNome}`)

    let id = req.params.id
    
    let produto = {
      name: req.body.name,
      description: req.body.description,
      categoria: req.body.categoria,
      price: Number(req.body.price),
      quantity: Number(req.body.quantity),
      image: `/img/${novoNome}`
    }

    ProdutosServices.updateProduct(id, produto)
console.log(produto);

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