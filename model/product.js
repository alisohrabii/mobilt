const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const productSchema = mongoose.Schema({
    proid:{
        type:String
     },
      name:{
        type:String
     },
      brand:{
        type:String
     },
   
    colors:{
        type:Array
    },
  
    count:{
        type:Number
    },
    existnumber:{
        type:Number
    },
    
    solded:{
        type:Number
    },
 
   
    rating:{
        type:Number
    },
    
    price:{
        type:Number
    },
    
    priceafter:{
        type:Number
    },
    discount:{
        type:Number
    },
    offer:{
type:Boolean
    }
 ,
 
 
    describe:{
        type:String
    },
    type:{
        type:String
    },
    colorselected:{
        type:String
    },
    garanty:{
        type:String
    },
    
    tecnicalinfo:[{
        name:String,
        value:String
          }]
          ,comment:[
              {
                  username:String,
                  mssagess:String
                    } 
          ]    ,
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
productSchema.index({
    name:'text',
    brand:'text',
    type:'text'
},{
    weights:{
        name:5,
        brand:3,
        type:3
    }

})








const Product = mongoose.model('Pduct', productSchema);

module.exports =  Product ;