const { saveProduct, findProducts } = require("../services/productsService")

const authenticateHome = async(req,res,next)=>{
    let datos = req.user
    let datosProducts = await findProducts()
    const {alias} = datos

    res.render("index",{alias,datosProducts})
}
const productPost = async(req,res,next)=>{
    await saveProduct(req.body)
    res.redirect("/")
}
module.exports = {authenticateHome,productPost}