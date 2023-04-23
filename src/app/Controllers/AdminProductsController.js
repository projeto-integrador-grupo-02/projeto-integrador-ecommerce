const fs = require('fs')
const ProdutosServices = require('../../../services/ProdutosServices')
const {Produto} = require('../../../databases/models')

const AdminProductsController = {

  showHomeAdmin: (req, res) => {
   res.render('dashboard-admin.ejs')
  },

  createProduct: (req, res) => {
    let categorias = ProdutosServices.showCategorias()
    res.render('create-admin.ejs', {categorias})
  },

  registerProduct: (req, res) => {
    let novoNome = req.body.name.replace(' ', '-').toLowerCase() + '.jpg';
    fs.renameSync(req.file.path, `public/img/${novoNome}`)

    let produto = {
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price),
      quantity: Number(req.body.quantity),
      categoria: req.body.categoria,
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

    res.redirect('/admin/products')

  },

  deleteProduct: (req, res) => {
    let id = req.params.id
    ProdutosServices.eraseProduct(id)

    res.redirect('/admin/products')
  },

  listProducts: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const perPage = 5;
      const currentPage = parseInt(page);
  
      const { produtosPaginados, totalPages } = await ProdutosServices.listProducts(
        currentPage,
        perPage
      );
  
      res.render("products-list-admin.ejs", {
        produtos: produtosPaginados,
        totalPages,
        currentPage,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Ocorreu um erro ao carregar a lista de produtos.");
    }
  },
  

  showCategorias: (req,res) => {
    const page = parseInt(req.query.page) || 1
    const perPage = 5
    const currentPage = parseInt(page)
    const categorias = ProdutosServices.listCategorias(currentPage, perPage)
    const { categoriasPaginados, totalPages } = ProdutosServices.listCategorias(page, perPage);
    res.render('categorias-list-admin.ejs', { categorias: categoriasPaginados, totalPages, currentPage: page })
  },

  editCategoria:(req,res) => {
    let id = req.params.id

    let categoria = ProdutosServices.loadCategoria(id)

    res.render('edit-categoria-admin.ejs', {id, categoria})
  },

  updateCategoria: (req,res) => {
    let id = req.params.id

    let categoria = {
      name: req.body.name
    }

    ProdutosServices.updateCategoria(id, categoria)

    res.redirect('/admin/products/categorias')
  },

  deleteCategoria: (req,res) => {
    let id = req.params.id

    ProdutosServices.eraseCategoria(id)

    res.redirect('/admin/products/categorias')

  },
  createCategorias: (req,res) => {
    let categorias = ProdutosServices.showCategorias()

    res.render('create-categoria-admin.ejs', {categorias})
  },

  registerCategorias: (req,res) => {
    let categoria = {
      name: req.body.name
    }

    ProdutosServices.createCategoria(categoria)

    res.redirect('/admin/products/categorias')
  }

}




module.exports = AdminProductsController