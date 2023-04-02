require("dotenv").config()

const getdata = require("./controller/controldata")
const dbconnect = require("./dbconnect/connection")


const express =require("express")

const app=express()
const PORT=process.env.PORT||4000

app.get("/api/v1/dat",getdata)

const server=async()=>{
    try {
        await dbconnect()
        app.listen(PORT,()=>{
        console.log("server is started on port: ",PORT)})
        
    } catch (error) {
        console.log(err)
    }
    
    
    
}
server()
