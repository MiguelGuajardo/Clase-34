const ProductDaoMemory = require("../daos/productDaoMemory.js")
const assert = require("assert")

describe("Prueba ProductDaoMemory",()=>{
    it("Si instanciamos la clase ProductDaoMemory, debe estar vacia", async ()=>{
        const products = new ProductDaoMemory()
        const product = await products.getAll()
        assert.strictEqual(product.length, 0)
    })
    it("Debe agregarse un producto correctamente", async ()=>{
        const products = new ProductDaoMemory()
        const product = await products.getAll()
        const newProduct = {
            title:"Notebook",
            price:"250000",
            thumbnail:"https://cdn3.iconfinder.com/data/icons/flat-set-1/64/flat_set_1-25-256.png"
        } 
        products.save(newProduct)
        assert.strictEqual(product.length, 1)
    })
    it("Debe verificarse que se encuentre ese producto", async ()=>{
        const products = new ProductDaoMemory()
        const product = await products.getAll()
        const newProduct = {
            title:"Notebook",
            price:"250000",
            thumbnail:"https://cdn3.iconfinder.com/data/icons/flat-set-1/64/flat_set_1-25-256.png"
        }
        assert.deepStrictEqual(product,[newProduct])
    })
})