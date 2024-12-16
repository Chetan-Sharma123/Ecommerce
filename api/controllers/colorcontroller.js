const colorTable=require('../models/color')




exports.addcolor=(req,res)=>{
    try{
    const{color}=req.body
    if(!color){
        throw new Error("color field is not Empty")
    }

    const colorData=new colorTable({color_name:color})
    colorData.save()
    res.status(200).json({
        status:200,
        message:'color Added Successfully'

    })
}catch(error){
    res.status(500).json({
        status:500,
        message:error.message

    })

}
}


exports.colorData=async(req,res)=>{
    try{
    const colorData=await colorTable.find()
    res.status(200).json({
        status:200,
        data:colorData
    })
}catch(error){
    res.status(500).json({
        status:500,
        message:error.message
    })

}


}

exports.deletecolor=async(req,res)=>{
    try{
    const id=req.params.id
    console.log(id)
    await colorTable.findByIdAndDelete(id)
    res.status(200).json({
        status:200,
        message:"Delete Are Successfully"

    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message

    })

}




}