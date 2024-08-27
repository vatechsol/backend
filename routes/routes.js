const express=require('express');
const routes=express.Router();
const stItem=require('../modal/students');


routes.post('/student',async(req,res)=>{
  
  const {name,rollNumber,college,branch}=req.body;

  console.log(name,rollNumber,college,branch)
  
  const newStudent=new stItem({
    name,
    rollNumber,
    college,
    branch
  })
console.log(newStudent)
  try{
    const saveItem = await newStudent.save();
    res.status(201).json(saveItem)

  }catch(err){
     res.status(500).json(err)
  }
  
})


routes.get('/data',async (req,res)=>{
   
  try{
   const data=stItem.find();
   res.json(data)

  }catch(error){
     res.status(500).json(error)
  }

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