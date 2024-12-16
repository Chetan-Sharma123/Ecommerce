const newsletterTable=require('../models/newsletters')



exports.insertnews=(req,res)=>{
    try{
        const{addnews}=req.body
        const newsletterInsert=new newsletterTable({news:addnews})
        newsletterInsert.save()
        console.log(newsletterInsert)

res.status(200).json({
    status:200,
    message:"news are successfully"
})
    }
    catch(error){
        
res.status(500).json({
    status:500,
    error:error.message
})

    }
    
}

exports.newsLetterData=async(req,res)=>{
    try{
    const newsletterData=await newsletterTable.find()
    res.status(200).json({
        status:200,
        newsdata:newsletterData
    })
    }catch(error){
        res.status(500).json({
            status:500,
            error:error.message
        })
    }


}