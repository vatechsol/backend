const express=require('express');
const cors = require('cors');
const app=express();
const port= 3000;

require('./DB/db')

const routes = require('./routes/routes');
app.use(cors());
app.use(express.json())
app.use('/api',routes)


app.listen(port,()=>{
    console.log(`i am running on the port ${port}`)
})