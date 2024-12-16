const mongoose=require('mongoose')


const offerSchema=mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true
      },
    offer:{
        type:Number,
        
    },
    offer_name:{
        type:String
    },
    start_date:{
        type:String
    },
    End_date:{
        type:String
    },
    status:{
        type:String,
        default:'active'
    }

},
{ timestamps: true } 
)


module.exports=mongoose.model('offer',offerSchema)