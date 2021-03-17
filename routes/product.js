const express = require('express');
const config = require("../config/keys");
const Product=require('../model/product');
const { v4: uuidv4} = require('uuid');
const { Router } = require('express');
const multer=require('multer');
const router = express.Router();
//rigister
router.post("/SetProduct",async(req, res) => {
  try{
    
    const {name,existnumber,garanty,brand,tecnicalinfo,images,price,discount,color,discribe,type}=req.body;
    console.log(name,price,color);
 console.log(uuidv4());
 let proid=uuidv4();
  const newproduct= new Product({
    proid:proid,
    name:name,
    count:1,
    existnumber:existnumber,
    colorselected:"",
    garanty:garanty,
    brand:brand,
    price:price,
    discount:discount,
    colors:color,
    discribe:discribe,
    type:type,
    brifinfo:{
proid:proid,
name:name,
price:price,
discount:discount,
images:images
    },
    tecnicalinfo:tecnicalinfo
   
  
  

    });
    newproduct.save().then((result)=>{
      res.status(200).json({mss:"info saved in database"});
      console.log('saved sucss');
    }).catch((err)=>console.log(err));


}catch(err){
    res.status(500).json({mss:"خطا در شبکه"});
  }
});


router.post("/GetproductbyType",async(req, res) => {
    try{
    const {type}=req.body;
    console.log(type);
    const product= await Product.find({type:type});
    
          if (product==null){
            console.log("product not found");
                    res.status(400).json({mss:"این نام کاربری وجود ندارد"});
          }else{
            console.log("product  found");
            console.log(product);
            const mypro=[];
            for(let i=0;i<product.length;i++){
mypro.push(product[i].brifinfo);
            }
                 res.status(200).json({mypro});
            }
        
    
    
           
    
    }catch(err){
        res.status(500).json({mss:"خطا در سرور"});
      }
    
    
})

//get product by search




router.post("/GetproductbySearch",async(req, res) => {
  try{
  const {searchTerm}=req.body;
  
  const product= await Product.find({ $text : { $search : searchTerm }});
  
        if (product==null){
          console.log("searching product not found");
                  res.status(400).json({mss:"کالایی با این عبارت  وجود ندارد"});
        }else{
          console.log("product  found");
          console.log(product);
          const mysearchpro=[];
          for(let i=0;i<product.length;i++){
mysearchpro.push(product[i].brifinfo);
          }
               res.status(200).json({mysearchpro});
          }
      
  
  
         
  
  }catch(err){
      res.status(500).json({mss:"خطا در سرور"});
    }
  
  
})
//get productDetail

router.post("/GetproductDetail",async(req, res) => {
  try{
  const {proid}=req.body;
  
  const product= await Product.find({proid:proid});
  
        if (product==null){
          console.log("searching product not found");
                  res.status(400).json({mss:"کالایی با این عبارت  وجود ندارد"});
        }else{
               res.status(200).json({product});
          }
      
  
  
         
  
  }catch(err){
      res.status(500).json({mss:"خطا در سرور"});
    }
  
  
})






//set cart

//save product images

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
  cb(null,` ${Date.now()}_${file.originalname}`)
  },
  fileFilter: (req, file, cb) => {
  const ext = path.extname(file.originalname)
  if (ext !== '.svg' || ext !== '.png'|| ext !== '.jpg') {
  return cb(res.status(400).end('only jpg, png are allowed'), false);
  }
  cb(null, true)
  }})
  var upload = multer({ storage: storage }).single("file");
  
  

router.post("/UploadProductImage",(req, res) => {
 
    console.log('hiiiiiiiiiiiii0000');
    upload(req, res, err => {
      if (err) return res.json({ success: false, err })
      return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
      })


  
  
})





module.exports = router;