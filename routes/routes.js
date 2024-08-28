const express=require('express');
const routes=express.Router();
const stItem=require('../modal/students');


routes.post('/student',async(req,res)=>{
  
  const {name,rollNumber,college,branch}=req.body;
  
  const newStudent=new stItem(req.body)
  try{
    const saveItem = await newStudent.save();
    res.status(201).json(saveItem)

  }catch(err){
     res.status(500).json({ error: err.message })
  }
  
})


routes.get('/data',async (req,res)=>{
   
  try{
   const data=await stItem.find();
   console.log(data)
   res.status(200).json(data)

  }catch(error){
     res.status(500).json(error)
  }

})

routes.delete('/delete/:rollNumber', async (req, res) => {
  const { rollNumber } = req.params;

  try {
      const deletedItem = await stItem.findOneAndDelete({ rollNumber });
      if (!deletedItem) {
          return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json({ message: 'Student deleted successfully', deletedItem });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

// PUT route to update a student by rollNumber
routes.put('/update/:rollNumber', async (req, res) => {
  const { rollNumber } = req.params;
  const updates = req.body;

  try {
      const updatedItem = await stItem.findOneAndUpdate({ rollNumber }, updates, { new: true });
      if (!updatedItem) {
          return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json({ message: 'Student updated successfully', updatedItem });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

routes.patch('/patch/:rollNumber', async (req, res) => {
  const { rollNumber } = req.params;
  const updates = req.body;

  try {
      const updatedItem = await stItem.findOneAndUpdate({ rollNumber }, updates, { new: true });
      if (!updatedItem) {
          return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json({ message: 'Student partially updated successfully', updatedItem });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


module.exports=routes;