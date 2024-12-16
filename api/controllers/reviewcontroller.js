const reviewTable=require('../models/review')


exports.reviewInsert=(req,res)=>{
    try{
        
    const{name,email,review,productrating,id}=req.body
    if(!name){
        throw new Error("name could not Blank !!!")
    }
    else if(!email){
        throw new Error("email could not Blank !!!")
    }
    
    else if(!review){
        throw new Error("Review could not Blank !!!")
    }
    else if(!productrating){
        throw new Error("please give Rating !!!")

    }
   const reviewData=new reviewTable({Name:name,Email:email,Review:review,Rating:productrating,productId:id})
   reviewData.save()
   res.status(200).json({
    status:200,
    message:"Review Are Successfully added"

   })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    
       })

}
    
}

exports.reviewData=async(req,res)=>{
    try{
    const reviewData=await reviewTable.find()
    //const activeReviewCount = await reviewTable.countDocuments({ status: 'active' })
        // const averageRating = await reviewTable.aggregate([
    //     {
    //       $group: {
    //         _id: null,  // You can group by null if you want the overall average
    //         averageRating: { $avg: "$Rating" }
    //       }
    //     }
    //   ]);
      
      
    res.status(200).json({
        status:200,
        data:reviewData,

    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message

    })

}

    
}


