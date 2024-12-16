const mongoose=require('mongoose')



const colorSchema=mongoose.Schema({
    color_name:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('color',colorSchema)