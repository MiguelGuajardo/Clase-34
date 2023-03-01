const fs = require("fs")
const path = require("path")
const Logger = require("../utils/logger")
const logger = new Logger()
class ProductDaoFile {
    constructor(){
        this.path = path.dirname(__dirname)+"/files/products.json"
        this.#init()
    }
    #init = async()=>{
        if(!fs.existsSync(this.path))
            await fs.promises.writeFile(this.path, JSON.stringify([]))
    }
    #readFile = async ()=>{
        let data = await fs.promises.readFile(this.path, "utf-8")
        return JSON.parse(data)
    }
    getAll = async ()=>{
        return await this.#readFile()
    }
    save = async (product)=>{
        try {
            let products = await this.#readFile()
            if(products.length ===0) product.id = 1
            else product.id = products[products.length -1].id + 1
            products.push(product)
            await fs.promises.writeFile(this.path, JSON.stringify(products,null, "\t"))
            return product
        } catch (error) {
            logger.error("Fatal Error",error)
        }
    }
}
module.exports = ProductDaoFile