const router=require('express').Router()
const createAccountc=require('../controllers/createAccountcontroller')
const categoryc=require('../controllers/categorycontroller')
const colorc=require('../controllers/colorcontroller')
const productc=require('../controllers/productcontroller')
const reviewc=require('../controllers/reviewcontroller')
const offerc=require('../controllers/offercontroller')
const upload=require('../middleware/multer')
const addtocartc=require('../controllers/addtocartcontroller')
const recentc=require('../controllers/recentcontroller')
const wishlistc=require('../controllers/wishlistcontroller')
const contactc=require('../controllers/contactcontroller')
const footerc=require('../controllers/footercontroller')
const newsletterc=require('../controllers/newslettercontroller')
const adderssc=require('../controllers/addresscontroller')


// create Account 

router.post('/createAccount',upload.single('image'),createAccountc.createAccount)
router.post('/login',createAccountc.login)


// category added

router.post('/addcategory',upload.single('image'),categoryc.addcategory)
router.get('/categorydata',categoryc.categorydata)
router.delete('/categorydelete/:id',categoryc.deletecategory)
router.get('/categoryShowData',categoryc.showcategorydata)


//color added
router.post('/addcolor',colorc.addcolor)
router.get('/colorData',colorc.colorData)
router.delete('/colorDelete/:id',colorc.deletecolor)

//product added

router.post('/addproduct',upload.array('productImages',12),productc.addproduct)
router.get('/productData',productc.productData)
router.get('/catproducts/:productcatory',productc.catproducts)
router.delete('/delproduct/:id',productc.deleteproduct)
router.get('/productDescriptions/:id',productc.productDescriptions)
router.post('/filterproductbyprice',productc.fiterProduct)
router.get('/paginations',productc.paginations)
router.post('/cartdetails',productc.productcart)
router.get('/offerProduct/:offer',productc.showOfferProducts)
router.get('/recentProducts',productc.showrecentProduct)

//review 
router.post('/reviewInsert',reviewc.reviewInsert)
router.get('/reviewdata',reviewc.reviewData)


//offer

router.post('/addoffer',offerc.insertoffer)
router.get('/offerData',offerc.offerData)
router.get('/offerdatastatus',offerc.offerdataActive)


//offer delete
router.delete('/offerDelete/:id',offerc.offerDelete)


//recent product

router.post('/insertrecent',recentc.recentData)

//wishlist
router.post('/wishlistInsert',wishlistc.wishlistInsert)
router.post('/wishlistproducts',productc.wishlistproducts)
router.post('/wishcount',wishlistc.wishlistcount)

//contact

router.post('/constactInsert',contactc.constactInsert)


router.get('/contactData',contactc.contactData)
router.delete('/deleteContact/:id',contactc.deleteContact)

router.get('/constactsendmail/:id',contactc.constactDelete)
router.post('/sendmail',contactc.sendmail)


//footer Insert
router.post('/footerInsert',footerc.footerInsert)
router.get('/footerData',footerc.footergetData)
router.delete('/footerdelete/:id',footerc.delfooter)


router.get('/getData/:id',footerc.updateData)
router.put('/updatefooter/:id',footerc.updatefooter)


//news letter

router.post('/insertnewsletter',newsletterc.insertnews)

router.get('/newsletterData',newsletterc.newsLetterData)

//oreders

router.post('/orders',productc.shippingdata)
router.post('/Insertaddress',adderssc.Insertadd)
router.get('/addressData',adderssc.addressData)


//addtocart
router.post('/insertaddtocart',addtocartc.insertaddtocart)









//testing products
router.get('/testing',productc.testingProuduct)

//searching

router.get('/searching/:searchitem',productc.searching)



module.exports=router