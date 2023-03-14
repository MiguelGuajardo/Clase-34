const { ProductsService } = require("../services/productsService")
const productService = new ProductsService()

const getProducts = async(req,res)=>{
    let datos = req.user
    const {alias} = datos
    let datosProducts = await productService.getProducts()
    res.render("index",{alias,datosProducts})
}
const saveProduct = async(req,res)=>{
    let product = req.body
    let result = await productService.addProduct(product)
    res.redirect("/")
}
const deleteProduct = async(req,res)=>{
    let id = req.params.id
    let product = await productService.deleteProduct(id)
}
module.exports = {getProducts,saveProduct,deleteProduct}