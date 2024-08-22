const express=require('express');
const routes=express.Router();

routes.get('/home',(req,res)=>{
    res.send("I am a home page ")

})

routes.post('/login',(req,res)=>{
    
    const userName=req.body.name;
    const password=req.body.pass;

    if(userName=="vikash" && password=="123")
      res.send("login successfull")
    else
      res.send("login fail")
    
})

routes.delete('/delete',(req,res)=>{
   res.send("I am a delete page")
})

routes.put('/put',(req,res)=>{
  res.send("I am a put page")
})

routes.patch('/patch',(req,res)=>{
    res.send("I am a patch page")
})


module.exports=routes;