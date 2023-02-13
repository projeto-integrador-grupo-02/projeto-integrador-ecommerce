const AdminProductsController = {
  /* showIndex: (req, res) => {res.render('dashboard-admin.ejs')}, */
  
  showProducts: (req,res) => {
  
  let produtos = require('../../../databases/products.json')

  let editarExcluir = 
  `<i class="fa-solid fa-pen-to-square"></i>
  <i class="fa-solid fa-trash"></i>`
  
  
  console.log(produtos)
  
  res.render('dashboard-admin.ejs', {produtos, editarExcluir})
}
}




module.exports = AdminProductsController