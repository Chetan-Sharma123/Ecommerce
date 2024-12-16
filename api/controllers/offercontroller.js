const offerTable=require('../models/offers')



exports.insertoffer=(req,res)=>{
    try{
    const{offer,offerName,offerStartingDate,offerEndDate}=req.body
    const productId=req.session.product_id
    const offerData=new offerTable({offer:offer,offer_name:offerName,start_date:offerStartingDate,End_date:offerEndDate,productId:productId})
    offerData.save()
    
    res.status(200).json({
        status:200,
        message:"Offer Added Successfully"
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}
}


exports.offerData=async(req,res)=>{
    try{
    const offerData=await offerTable.find()
    
    res.status(200).json({
        status:200,
        data:offerData

    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message

    })

}
}


exports.offerDelete=async(req,res)=>{
    try{
    const id=req.params.id
    await offerTable.findByIdAndDelete(id)
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


exports.offerdataActive=async(req,res)=>{
    try{
    const offerActiveData=await offerTable.find({status:'active'})
    res.status(200).json({
        status:200,
        data:offerActiveData
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}

}
