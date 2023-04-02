const Prod_data=require("../model/datamodel")
const axios=require("axios")
const asyncWrapper = require("../middleware/asyncwrapper")

//fetching data using axios
const dwldata=async()=>{
    console.log("hi")
    var dat=await axios({
        method:"get",
        url:"https://api.wazirx.com/api/v2/tickers?limit=1",

    })

    const keys=await Object.keys(dat.data)
    var arr=[]
    for(let i=0;i<keys.length;i++){
        if(i==10){
            break
        }

        arr.push(keys[i])

        
    }
    var result=[]
    for(let i=0;i<arr.length;i++){
        
        result.push(dat.data[arr[i]])

    }
    return result
    
}



//inserting data into database
const uploaddata=async()=>{
    const dwl=await dwldata()
    const upload=await Prod_data.create(dwl)
}
uploaddata()

//getting data
const getdata=asyncWrapper(async(req,res)=>{
    const dwl=await Prod_data.find()
    res.status(200).json({dwl})
    
})


module.exports=getdata