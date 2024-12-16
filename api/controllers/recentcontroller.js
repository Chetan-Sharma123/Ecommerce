const recentTable = require('../models/recentProduct');


exports.recentData=(req,res)=>{
    try{
    const{productId}=req.body
    const recentData=new recentTable({productId:productId})
    recentData.save()
    console.log(recentData)
    res.status(200).json({
        status:200,
        message:"data successfully data"
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}


}