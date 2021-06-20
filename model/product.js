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
    isparcham:{
        type:String
    },
    
    
    discount:{
        type:Number
    },
    discribe:[{
        name:String,
        value:String,
        image:String
          }]
          ,
    type:{
        type:String
    },
    colorselected:{
        type:String
    },
    garanty:{
        type:String
    },
    priceafter:{
        type:Number
    },
    
    tecnicalinfo:[{
        name:String,
        value:String,
        brnch:String
          }]
          ,comment:[
              {
                  username:String,
                  mssagess:String
                    } 
          ]    ,
    brifinfo:{
        
    engname:{
        type:String
    },
    proid:{
            type:String
         },
     offer:{
            type:Boolean
        },
        priceafter:{
            type:Number
        },
        gift:{
            type:String
        },
        likes:{
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