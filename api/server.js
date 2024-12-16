const express=require('express')
const app=express()
// const bodyParser=require('body-parser')
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
require('./dbconnction/dbconfig')
const env=require('dotenv').config()
const apiRouter=require('./routers/apirouter')
const bodyParser = require('body-parser')
const session=require('express-session')









app.use(session({
    secret:'abc',
    saveUninitialized:true,
    resave:true,
}))

app.use('/api',apiRouter)
app.listen(process.env.PORT,()=>{
    console.log(`Port is currently running on ${process.env.PORT}`)
})