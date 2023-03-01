class ProductDaoMemory {
    constructor(){
        this.products = []
    }
    getAll = async ()=>{
        return this.products
    }
    save = async (product)=>{
        if(this.products.length ===0) product.id = 1
        else product.id = this.products[this.products.length-1].id + 1
        this.products.push(product)
        return product
    }
}
module.exports = ProductDaoMemory