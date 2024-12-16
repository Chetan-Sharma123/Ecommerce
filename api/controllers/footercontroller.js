const footerTable=require('../models/FooterInsert')



exports.footerInsert=(req,res)=>{
   const{about,address,Email,PhoneNo,FaceBook,Linkdin,instrgram,twiter}= req.body
    try{
       const footerData= new footerTable({about:about,adress:address,Email:Email,phoneNo:PhoneNo,facebook:FaceBook,linkdin:Linkdin,instrgram:instrgram,twiter:twiter})
       footerData.save()
       res.status(200).json({
        status:200,
        message:"Data are Saved Successfully"
       })

    }catch(error){
        res.status(200).json({
            status:200,
            data:footerData
           })

    }

}



exports.footergetData=async(req,res)=>{
    try{
        const footerData=await footerTable.find()
        res.status(200).json({
            status:200,
            data:footerData
        })


    }catch(error){
        res.status(200).json({
            status:200,
            data:footerData
        })
    }
    
}

exports.delfooter=async(req,res)=>{
    const id=req.params.id
    try{
        await footerTable.findByIdAndDelete(id)
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


exports.updateData=async(req,res)=>{
    try{
    const id =req.params.id
    const updateData=await footerTable.findById(id)
    res.status(200).json({
        status:200,
        updateData:updateData
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}


}

exports.updatefooter=async(req,res)=>{
    try{
        const id=req.params.id
        const{about,address,Email,PhoneNo,FaceBook,Linkdin,instrgram,twiter}=req.body
        console.log(req.body)
    await footerTable.findByIdAndUpdate(id,{about:about,address:address,Email:Email,phoneNo:PhoneNo,facebook:FaceBook,linkdin:Linkdin,instrgram:instrgram,twiter:twiter})
    res.status(200).json({
        status:200,
        message:"Update Are Successfully"
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}

}