require('dotenv').config();
const mongoose = require('mongoose');
const uri=process.env.DATABASE_URI;

const db=mongoose.connect(uri, {
  
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Connection error', err);
});

module.exports=db;
  
 