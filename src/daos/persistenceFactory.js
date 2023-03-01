const { config } = require("../config/index")
const ProductDaoFile = require("./productDaoFile")
const ProductDaoMemory = require("./productDaoMemory")
const ProductDaoMongo = require("./productDaoMongo")

class PersistenceFactory{
    static getPersistence = async () =>{
        switch(config.APP.persistence){
            case "MEMORY":
                /* let {default: ProductDaoMemory} = await require("./productDaoMemory") */
                return new ProductDaoMemory()
            case "FILE":
                /* let {default: ProductDaoFile} = await require("./productDaoFile") */
                return new ProductDaoFile()
            case "MONGO":
                return new ProductDaoMongo()
        }
    }
} 
module.exports = PersistenceFactory