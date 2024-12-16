const mongoose=require('mongoose')



const addToCartSchema=mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    productId: { 
        
        type: mongoose.Schema.Types.ObjectId,  // Reference to the Product schema
        ref: 'product',  // Name of the Product model
        required: true
    },
    quantity: {
        type: Number,  // Quantity of the product added to the cart
        default: 1,
        min: 1
      },
    post_date:{
        type:String,
        default:new Date(),
        required:true
    }
})


module.exports=mongoose.model('addtocart',addToCartSchema)