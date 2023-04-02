const mongoose=require("mongoose")
const dbconnect=()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to database")
        
    } catch (error) {
        console.log(err)
        
    } 
}
module.exports=dbconnect