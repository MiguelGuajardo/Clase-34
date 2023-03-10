const { ProductsService } = require("../services/productsService")
const productService = new ProductsService()

const getProducts = async(req,res)=>{
    let datosProducts = await productService.getProducts()
    res.json(datosProducts)
}
const getOneProduct = async(req,res)=>{
    let id = req.params.id
    let product = await productService.getOneProduct(id)
    res.json(product)
}
const saveProduct = async(req,res)=>{
    let product = req.body
    let result = await productService.addProduct(product)
    res.json(result)
}
const deleteProduct = async(req,res)=>{
    let id = req.params.id
    await productService.deleteProduct(id)
    res.json("Producto eliminado")
}
module.exports = {getProducts,getOneProduct,saveProduct,deleteProduct}