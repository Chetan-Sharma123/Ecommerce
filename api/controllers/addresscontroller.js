const addressTable=require('../models/address')




exports.Insertadd=(req,res)=>{
    try{
    const{fname,lname,email,mobileNo,address1,address2,country,city,state,zip,loginEmails}=req.body
    const addressData=new addressTable({username:loginEmails,firstName:fname,lastName:lname,email:email,mobileNo:mobileNo,address1:address1,address2:address2,country:country,city:city,state:state,pinCode:zip})
    addressData.save()
    console.log(addressData)
    res.status(200).json({
        status:200,
        message:"Data Are Successfully"
    })
}catch(error){
    res.status(500).json({
        status:500,
        message:error.message
    })

}    
}

exports.addressData=async(req,res)=>{
    try{
    const{loginemails}=req.body
    const addData=await addressTable.find({username:loginemails})
    res.status(200).json({
        status:200,
        data:addData
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}
    

}