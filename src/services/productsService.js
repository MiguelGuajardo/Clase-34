const PersistenceFactory = require("../daos/persistenceFactory")

class ProductsService {
    constructor(){
        this.productsDao
        this.#init()
    }

    #init = async ()=>{
        this.productsDao = await PersistenceFactory.getPersistence()
    }
    getProducts = async ()=>{
        return await this.productsDao.getAll()
    }
    getOneProduct = async (id)=>{
        return await this.productsDao.getOne(id)
    }
    addProduct = async (product)=>{
        return await this.productsDao.save(product)
    }
    deleteProduct = async(id)=>{
        return await this.productsDao.delete(id)
    }

}
module.exports = {ProductsService}