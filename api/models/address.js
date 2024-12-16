const mongoose=require('mongoose')



const addressSchema=mongoose.Schema({
    username:{
        type:String,
        default:'active',
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    
    address1:{
        type:String,
        required:true
    },
    
    address2:{
        type:String,
        required:true
    },
    
    country:{
        type:String,
        required:true
    },
    
    city:{
        type:String,
        required:true
    },
    
    state:{
        type:String,
        required:true
    },
    
    pinCode:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:'active',
        required:true
    }
})


module.exports=mongoose.model('adderss',addressSchema)