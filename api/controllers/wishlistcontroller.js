
const wishlistTable=require('../models/wishlist')



exports.wishlistInsert=async(req,res)=>{
    console.log(req.body)
    const{wishlistId,wishlisEmail}=req.body
    try{
       const item= await wishlistTable.findOne({productId:wishlistId})
       if(!item){
        const wishlistinsertdata=new wishlistTable({productId:wishlistId,wishlisEmail:wishlisEmail})
        wishlistinsertdata.save()
       
        res.status(200).json({
            status:200,
            message:"wishlist are Added Successfully"
        })
    }
    }catch(error){
        res.status(500).json({
            status:500,
            message:"Item already in wishlist "
        })

    }

}
exports.wishlistcount=async(req,res)=>{
    try{
    const{loginEmail}=req.body
    const totalWishlistCount = await wishlistTable.countDocuments({ wishlisEmail:loginEmail });
    console.log(totalWishlistCount);
    res.status(200).json({
        status:200,
        totalWishlistCount:totalWishlistCount
    })
}catch(error){
    res.status(500).json({
        status:500,
        totalWishlistCount:totalWishlistCount
    })
}
    
}

