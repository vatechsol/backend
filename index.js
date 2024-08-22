const express=require('express');
const app=express();
const port= 3000;

require('./DB/db')

const routes = require('./routes/routes');
app.use(express.json())
app.use('/vikash',routes)


app.listen(port,()=>{
    console.log(`i am running on the port ${port}`)
})
