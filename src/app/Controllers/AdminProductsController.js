const fs = require('fs')
const ProdutosServices = require('../../../services/ProdutosServices')
const {Produto} = require('../../../databases/models')
const {Categoria} = require('../../../databases/models')
const AdminServices = require('../../../services/AdminServices')

const AdminProductsController = {

  showHomeAdmin: (req, res) => {
    let id = req.params.id
    let adm = AdminServices.loadAdm(id)
   res.render('dashboard-admin.ejs', {adm})
  },

  createProduct: async (req, res) => {
    let categorias = await ProdutosServices.showCategorias();
    res.render('create-admin.ejs', {categorias});
},


registerProduct: async (req, res) => {
  let novoNome = req.body.name.replace(' ', '-').toLowerCase() + '.jpg';
  fs.renameSync(req.file.path, `public/img/${novoNome}`);

  let produto = {
      nome_produto: req.body.name,
      descricao: req.body.description,
      preco: Number(req.body.price),
      quantidade: Number(req.body.quantity),
      id_categoria: req.body.categoria, 
      imagem: `/img/${novoNome}`,
      disponivel: true
  };
    
  const newProduto = await Produto.create({
      nome_produto: produto.nome_produto,
      descricao: produto.descricao,
      preco: produto.preco,
      quantidade: produto.quantidade,
      disponivel: produto.disponivel,
      imagem: produto.imagem,
      id_categoria: produto.id_categoria
  });

  res.redirect('/admin/products');
}
,


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
  

  showCategorias: async (req,res) => {
    const page = parseInt(req.query.page) || 1
    const perPage = 5
    const currentPage = parseInt(page)
    const { categorias, totalPages } = await ProdutosServices.listCategorias(page, perPage);
    res.render('categorias-list-admin.ejs', { categorias, totalPages,currentPage: page })
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

  registerCategorias: async (req,res) => {
  let categoria = {
    nome_categoria: req.body.name
  }

    let newCategoria = await Categoria.create({
      nome_categoria: categoria.nome_categoria
    })

    ProdutosServices.createCategoria(categoria)

    res.redirect('/admin/products/categorias')
  }

}




module.exports = AdminProductsController