const mongoose=require('mongoose')


const newsLetterSchema=mongoose.Schema({
    news:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'active',
        required:true
    },
    postDate:{
        type:String,
        default:Date(),
        required:true
    },
})


module.exports=mongoose.model('newsletter',newsLetterSchema)