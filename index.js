const express=require('express')
const app=express()

const port=process.env.port || 5000

app.get("/home",(req,res)=>{
    res.send("this is home page")
})

app.listen(port,()=>{
    console.log("server is working at : "+port);
})




