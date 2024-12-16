const contactTable=require('../models/Contact')
const nodemailer = require("nodemailer");



exports.constactInsert=(req,res)=>{
    try{
    const{name,email,subject,message}=req.body
    const constacData=new contactTable({name:name,email:email,sub:subject,message:message})
    constacData.save()
    res.status(200).json({
        status:200,
        message:"send message Successfully"
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}
}

exports.contactData=async(req,res)=>{
    try{
    const data=await contactTable.find()
    res.status(200).json({
        status:200,
        constactData:data
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}
    
}

exports.deleteContact=async(req,res)=>{
    try{
    const id=req.params.id
    await contactTable.findByIdAndDelete(id)
    res.status(200).json({
        status:200,
        message:"Delete Are SuccessFully"
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })
    
}
}

exports.constactDelete=async(req,res)=>{
    try{
    const id=req.params.id
console.log(id)
const data=await contactTable.findById(id)
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

exports.sendmail=async(req,res)=>{
    try{
    const{replaymail,replaysub,replaymess,replaytomail}=req.body
    const checkEmail=await contactTable.findOne({email:replaymail})
  
    

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: "nodetest73@gmail.com",
    pass: "ijgwkwkywrcevsvg",
  },
});



  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: replaytomail, // sender address
    to: replaymail, // list of receivers
    subject: replaysub, // Subject line
    text: replaymess, // plain text body
    
  });

res.status(200).json({
    status:200,
    message:"sent message is Successfully"
})
let currentemail=null
if(checkEmail.Response=='No-Replay'){
    currentemail='Replied'
        
}else{
    currentemail='No-Replay'

}
console.log(currentemail)
const id=checkEmail.id
await contactTable.findByIdAndUpdate(id,{Response:currentemail})

}catch(error){
    
res.status(500).json({
    status:500,
    message:"sent message is Successfully"
})

}

}