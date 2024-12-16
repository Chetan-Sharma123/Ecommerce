const categoryTable=require('../models/category')



exports.addcategory=(req,res)=>{
    try{
    const{category,subcategory}=req.body
    console.log(subcategory)
    if(!category){
        throw new Error("category could not Blank !!!")
    }

else if(!req.file){
    throw new Error("Image  could not Blank !!!")

}
const filename=req.file.filename
    const categorydata=new categoryTable({categoryName:category,subcategory:subcategory,categoryImage:filename})
    categorydata.save()
    res.status(200).json({
        status:200,
        message:"category is Successfully Added"
    })

}catch(error){
    res.status(500).json({
        status:500,
        message:error.message
    })

}
    
}


exports.categorydata=async(req,res)=>{
    try{
    const data=await categoryTable.find()
    res.status(200).json({
       status:200,
       data:data 
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message 
     })

}

    
}

exports.deletecategory=async(req,res)=>{
    const id=req.params.id
    try{
    

    await categoryTable.findByIdAndDelete(id)
    res.status(200).json({
        status:200,
        message:'Delete Are Successfully'
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}
    
}


exports.showcategorydata=async(req,res)=>{
    try{
    const data=await categoryTable.find({categorystatus:'active'})
    const categoryCount = await categoryTable.countDocuments({ categorystatus: 'active' });

    res.status(200).json({
        status:200,
        categoryData:data,
        categorycount:categoryCount       
    })
}catch(error){
    res.status(500).json({
        status:500,
        message:error.message       
    })

}

    
}

