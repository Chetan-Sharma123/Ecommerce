const createAccountTable=require('../models/createAccount')
const nodemailer=require('nodemailer')
const bcrypt=require('bcrypt')
exports.createAccount=async(req,res)=>{
   const{fname,lname,Email,password,gender} =req.body
    try{
    if(!fname){
        throw new Error("first Name could not Blank")

    }
    else if(!lname){
        throw new Error("Last Name could not Blank")

    }
    else if(!Email){
        throw new Error("Email could not Blank")

    }
    else if(!password){
        throw new Error("Password could not Blank")

    }
    else if(!gender){
        throw new Error("Gender could not Blank")

    }
    else if(!req.file){
        throw new Error("Image could not Blank")
    }
    const checkEmail=await createAccountTable.findOne({email:Email})
    
    if(checkEmail!==null){
        throw new Error("Email Are Already Exits")

    }
    const filename=req.file.filename
   const changePassword=await bcrypt.hash(password,10)
const data=await createAccountTable({fname:fname,lname:lname,email:Email,password:changePassword,image:filename,gen:gender})
 data.save()
 


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "",
    pass: "",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'nodetest73@gmail.com', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Your Account is Successfully created", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

}
res.status(200).json({
    message:'Account are Create Successfully',
    status:200

})
}catch(error){
    res.status(500).json({
        message:error.message,
        status:500
    
    })

}

}


exports.login=async(req,res)=>{
    try{
    const{email,password}=req.body
    if(!email){
        throw new Error("Email could not Blank !!!")
    }
    else if(!password){
        throw new Error("Password could not Blank !!!")

    }
    const checkEmail=await createAccountTable.findOne({email:email})
    if(checkEmail){
    const verifypassword=await bcrypt.compare(password,checkEmail.password)
        if(verifypassword){   
             
    res.status(201).json({
        status:200,
        data:checkEmail
    })
        }else{
            throw new Error("password could not Match")
        }

    }else{
        throw new Error("Email not Registerd")
    }
}catch(error){
    res.status(500).json({
        status:500,
        message:error.message
    })


}
        


}
