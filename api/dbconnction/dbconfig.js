const mongoose=require('mongoose')
const env =require('dotenv').config()
mongoose.connect(`${process.env.DATABASE}/${process.env.DATABASE_NAME}`).then(()=>{
    console.log(`Database Are connected Successfully ${process.env.DATABASE_NAME} `)
}).catch((error)=>{
    console.log(error)
})