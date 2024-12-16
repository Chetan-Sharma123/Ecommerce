const mongoose=require('mongoose')
 

const recentSchema=mongoose.Schema({
    productId: { 
        type: mongoose.Schema.Types.ObjectId,  // Reference to the Product schema
        ref: 'product',  // Name of the Product model
        required: true
    },

})


module.exports =mongoose.model('recent',recentSchema)