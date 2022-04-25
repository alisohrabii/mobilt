const express = require("express");
const app = express();
const cors = require('cors');
const Product = require('./model/product');
const config = require("./config/keys");
const path=require('path');
require("dotenv").config({path:"./config.env"});
const mongoose = require("mongoose");
const hostname ='0.0.0.0';
mongoose.connect(process.env.MONGO_URI ,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() =>{
    const port = 8088;
app.listen(port,hostname, () => {
  console.log(`Server Listening on ${port}`)
})
    console.log('MongoDB Connected...')})
  .catch(err => console.log(err));
  app.use(cors());
  app.use(express.json());
  app.use("/uploads", express.static("./uploads"));
  app.use('/users',require('./routes/users'));
  app.use('/product',require('./routes/product'));
//if(process.env.NODE_ENV=='production'){
 // app.use(express.static('client/build'));
  //app.get('*',(req,res)=>{

  //  res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  //})


//}
