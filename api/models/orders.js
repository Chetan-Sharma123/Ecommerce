const mongoose=require('mongoose')

const orderSchema=mongoose.Schema({
    username:{
        type:String,
    },
    pname:{
        type:String,
    },
    pdesc:{
        type:String,
    },
    qty:{
        type:Number,
    },
    price:{
        type:Number,
    },
    pdate:{
        type:Date,
        default:new Date()

    }

})

module.exports=mongoose.model('order',orderSchema)