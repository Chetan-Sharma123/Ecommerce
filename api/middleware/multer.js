const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,'../../PAKAJECOMMERCE/shopingcart/public/images')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})

const upload=multer({storage:storage})
module.exports=upload