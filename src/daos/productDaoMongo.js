const Product = require("../models/Product")
class ProductDaoMongo {
    constructor(){}
    getAll = async()=>{
        const datos = await Product.find({}).lean()
        return datos
    }
    getOne = async(id)=>{
        try {
            const product = await Product.findById(id)
            return product
        } catch (error) {
            console.log(error)
        }
    }
    save = async(product)=>{
        try {
            const newProduct = new Product()
            newProduct.title = product.title
            newProduct.price = product.price
            newProduct.thumbnail = product.thumbnail
            return await newProduct.save()
        } catch (error) {
            logger.error("Error",error)
        }
    }
    delete = async(id)=>{
        try {
            return Product.findByIdAndDelete(id)
        } catch (error) {
            logger.error("Error",error)
        }
    }
}
module.exports = ProductDaoMongo