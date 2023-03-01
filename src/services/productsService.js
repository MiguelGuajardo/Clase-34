const Product = require("../models/Product")
const Logger = require("../utils/logger")
const logger = new Logger()

const findProducts = async ()=>{
    const datos = await Product.find({}).lean()
    return datos
}
const saveProduct = async (obj) =>{
    try {
        const newProduct = new Product()
        newProduct.title = obj.title
        newProduct.price = obj.price
        newProduct.thumbnail = obj.thumbnail
        return await newProduct.save()
    } catch (error) {
        logger.error("Error",error)
    }
}
module.exports = {
    saveProduct,
    findProducts
}