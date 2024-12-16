const mongoose=require('mongoose')

const categorySchema=mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    subcategory:{
        type:String,
    
    },
    categorystatus:({
        type:String,
        default:'active',
        required:true
    }),
    categoryImage:({
        type:String,
        required:true
    })
})


module.exports=mongoose.model('category',categorySchema)


