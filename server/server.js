const express= require("express");
const app =express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());

const cors =require("cors")
app.use(cors())


require('dotenv').config();
const PORT =process.env.PORT|| 8000;

app.get("/get",(req,res)=>{
    res.send("The server is running")
})

app.post("/post",(req,res)=>{
     const {name,number,email }=req.body;
     console.log("this is the request <><><><>"
     ,name,number,email)

     const responseData={
    message:"Succesfully resgistered ",
    data:{name,email,number}};

    res.json(responseData);
})



app.listen(PORT ,()=>{
    console.log(`server is listen in http://localhost:${PORT}`)
    
})
