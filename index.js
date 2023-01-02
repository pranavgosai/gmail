const express = require("express");
const path = require('path')
const bodyparser = require("body-parser");
const { json } = require("body-parser");
const app = express();
const port = 4000;
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.json());
app.get("/api/v1/userdata",(req,res)=>{
    res.json({
      name:"pranav",
      email:"pranav@gamil.com",
      password:"123456789",
    })
});

app.post("/api/v1/register",(req,res)=>{

   const userName= req.body.name;
   const useremail= req.body.email;
   const userpassword= req.body.password;


    res.json({
       success:true,
       name:userName,
       email:useremail,
       password:userpassword,
    })
})

app.post("/",(req,res)=>{
    res.send("<h1>done</h1>")
   console.log(req.body);
})

app.listen(port,()=>{
    console.log(`server is working on port:${port}`);
});