const mongoose=require('mongoose')

const imageSchema=mongoose.Schema({
    filename: {
        type: String,
        required: true,
      },
})
const productSchema=mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_desc:{
        type:String,
        required:true
    },
    product_mrp:{
        type:Number,
        required:true
    },
    product_actual:{
        type:Number,
        required:true
    },
    product_category:{
        type:String,
        required:true
    },
    product_sub_category:{
        type:String,
    
    },
    
    product_Quality:{
        type:Number,
        required:true
    },
    
    product_color:{
        type:String,
        required:true
    },
    product_status:{
        type:String,
        required:true
    },
    offer:{
        type:Number,
    
    },
    images: [String], 
    product_Id:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('product',productSchema)