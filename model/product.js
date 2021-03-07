const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const productSchema = mongoose.Schema({
    proid:{
        type:String
     },
    name: {
        type:String,
        maxlength:200
    },
    
    price: {
        type: String,
        
    },
    discount: {
        type:Number,
        
    },
    colors:{
        type:Array
    },
    detail:{
        type:String
    },
    type:{
        type:String
    },
    brifinfo:{
        proid:{
            type:String
         },
         name:{
            type:String
         },
         price:{
            type:Number
        },
         discount:{
            type:Number
        },
         images:{
            type:Array
        }


    }
},{timestamps:true})








const Product = mongoose.model('Pduct', productSchema);

module.exports =  Product ;