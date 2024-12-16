const mongoose=require('mongoose')



const wishlistSchema=mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true

    },
    wishlisEmail:{
        type:String,
        required:true
    }
})



module.exports=mongoose.model('wishlist',wishlistSchema)