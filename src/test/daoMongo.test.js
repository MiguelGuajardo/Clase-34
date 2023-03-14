const superTest = require("supertest")
const {expect} = require("chai")
const {assert} = require("chai")
const User = require("../models/User")
const Product = require("../models/Product")

const request = superTest("http://localhost:8080/products")
const requestRegister = superTest("http://localhost:8080/register")

describe("test Mongo", ()=>{
    describe("POST", ()=>{
        it("post Register",async()=>{
            let data = {
                    email:"asd2584565@gmail.com",
                    firstName:"John",
                    lastName:"Doe",
                    alias:"Doe",
                    edad:21,
                    direccion:"asd2413",
                    phone:1122334455,
                    password:"456456"
            }
            let user = User.find(data.email)

            if(!user === data.email){
                let res = await requestRegister.post("/").send(data)
                expect(res.status).to.equal(200)
                expect(res.body.user).to.have.property("firstName",data.firstName)
            }
        })
    })
    describe("GET",()=>{
        it("La peticion deberia retornar si existen usuarios", async()=>{
            let user = User.find({})
            expect(user).to.have.keys(user)
        })
    })
    describe("GET", ()=>{
        it("La peticion deberia retornar status 200", async()=>{
            let res = await request.get("/")
            expect(res.status).to.equal(200)
        })
    })
    describe("GET",()=>{
        it("Debe retornar un header Content-type: application/json",async()=>{
            const res = await request.get("/")
            expect(res.header["content-type"]).to.contain("application/json")
        })
    })
    describe("POST", ()=>{
        it("Debe guardar un producto", async ()=>{
            let newProduct = {
                title:"Iphone",
                price:"250000",
                thumbnail:"https://cdn3.iconfinder.com/data/icons/flat-set-1/64/flat_set_1-25-256.png"
            }
            let res = await request.post("/").send(newProduct)
            expect(res.status).to.equal(200)
            const resBody = res.body
            expect(resBody).to.include.keys("title","price","thumbnail","_id")
        })
    })
    describe("DELETE", ()=>{
        it("Debe eliminar un producto",()=>{
            try {
                let newProduct = {
                    title:"Iphone",
                    price:"250000",
                    thumbnail:"https://cdn3.iconfinder.com/data/icons/flat-set-1/64/flat_set_1-25-256.png"
                }
                let res = Product.findOneAndDelete({"title":"Iphone"})
                expect(res.result.ok).to.equal(1);
            } catch (error) {
                
            }
            
        })
    })
})