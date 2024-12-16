const mongoose=require('mongoose')



const contacSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    Response:{
        type:String,
        default:"No-Replay",
        required:true
    }
})



module.exports=mongoose.model('contact',contacSchema)

