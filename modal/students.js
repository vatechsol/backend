const mongoose = require('mongoose');

const studentSchema=new mongoose.Schema({

   name:{
    type:"string",
    require:true,
    unique:true
   },

  rollNumber:{
    type:"string",
    require:true
  },

  college:{
   type:"string",
   require:true
  },

  branch:{
    type:"string",
    
  }

})

const stItem=mongoose.model("stItem",studentSchema);

module.exports=stItem;