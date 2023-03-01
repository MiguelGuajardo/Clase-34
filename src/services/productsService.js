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
    addProduct = async (product)=>{
        return await this.productsDao.save(product)
    }

}
module.exports = {ProductsService}