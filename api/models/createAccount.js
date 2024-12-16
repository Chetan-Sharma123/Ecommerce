const mongoose=require('mongoose')


const createAccountSchema=mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    gen:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'active',
        required:true
    }
})


module.exports=mongoose.model('createAccount',createAccountSchema)