const mongoose=require('mongoose')


const footerSchema=mongoose.Schema({
    about:{
        type:String,
        required:true
    },
    adress:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    facebook:{
        type:String,
        required:true
    },
    linkdin:{
        type:String,
        required:true
    },
    instrgram:{
        type:String,
        required:true
    },
    twiter:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('footer',footerSchema)