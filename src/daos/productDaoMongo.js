const Product = require("../models/Product")
class ProductDaoMongo {
    constructor(){}
    getAll = async()=>{
        const datos = await Product.find({}).lean()
        return datos
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
}
module.exports = ProductDaoMongo