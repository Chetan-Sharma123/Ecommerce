const productTable=require('../models/product')
const review = require('../models/review')
const mongoose=require('mongoose')
const orderTable=require('../models/orders')
const wishlistTable = require('../models/wishlist')

// const reviewTable=require('../models/review')


exports.addproduct=(req,res)=>{
     try{
      const images=req.files.map((val)=>{
        return val.filename
      })
      
    const{productName,productdesc,productmrp,productactual,productcategory,productsubcategory,productQuality,productcolor,productstatus,productId,offer} = req.body
    
    
    if(!productName){
        throw new Error("product Name is could note Blank")

    }
    else if(!productdesc){
        throw new Error("product Descriptions is could note Blank")

    }
    else if(!productmrp){
        throw new Error("product MRP is could note Blank")

    }
    else if(!productactual){
        throw new Error("product Actual Price is could note Blank")

    }
    else if(!productcategory){
        throw new Error("product category is could note Blank")

    }
 
    else if(!productQuality){
        throw new Error("product Quality is could note Blank")

    }
    else if(!productcolor){
        throw new Error("product color is could note Blank")

    }
    
    else if(!productstatus){
        throw new Error("product status is could note Blank")

    }
    else if(!productId){
        throw new Error("product Id is could note Blank")

    }
    else if(!req.files){
        throw new Error("product Image is could note Blank")

    }
   
    const productData=new productTable({product_name:productName,product_desc:productdesc,product_mrp:productmrp,product_actual:productactual,product_category:productcategory,product_sub_category:productsubcategory,product_Quality:productQuality,product_color:productcolor,product_status:productstatus,images:images,product_Id:productId,offer:offer})

    productData.save()
    console.log(productData)
    if(productData!==null){
        req.session.product_id=productData.id
    }
    
    res.status(200).json({
        status:200,
        message:"product Are Successfully Added"

    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message

    })

}

}


exports.productData=async(req,res)=>{
    try{
    const productdata=await productTable.aggregate([
        {
            $lookup:{
                from:'reviews',
                localField:"_id",
                foreignField:"productId" ,
                as:"review"
            }
        },
        {
            $addFields: {
              reviewCount: { $size: "$review" },  // Count the number of reviews
              averageRating: {                    // Calculate the average rating
                $cond: {
                  if: { $gt: [{ $size: "$review" }, 0] },  // Check if there are reviews
                  then: { $avg: "$review.Rating" },        // If there are reviews, calculate the average
                  else: 0                                  // If no reviews, set averageRating to 0
                }
              }
            }
          }
        ]);
    

    res.status(200).json({
        status:200,
        data:productdata
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}


    
}



exports.catproducts=async(req,res)=>{
//     try{
//     const product_category=req.params.productcatory
// const catproductsdata =   await productTable.find({product_category:product_category})

//     res.status(200).json({
//         status:200,
//         data:catproductsdata

//     })
// }catch(error){
//     res.status(500).json({
//         status:500,
//         error:error.message

//     })

// }

try{
    const product_category=req.params.productcatory
    const catproductsdata=await productTable.aggregate([
        {
            $match:{product_category:product_category}
        },
        {
            $lookup:{
                from:'reviews',
                localField:"_id",
                foreignField:"productId" ,
                as:"review"
            }
        },
        {
            $addFields: {
              reviewCount: { $size: "$review" },  // Count the number of reviews
              averageRating: {                    // Calculate the average rating
                $cond: {
                  if: { $gt: [{ $size: "$review" }, 0] },  // Check if there are reviews
                  then: { $avg: "$review.Rating" },        // If there are reviews, calculate the average
                  else: 0                                  // If no reviews, set averageRating to 0
                }
              }
            }
          }
        ]);

    res.status(200).json({
        status:200,
        data:catproductsdata
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}
}


exports.deleteproduct=async(req,res)=>{
    try{
  const id=req.params.id
  await productTable.findByIdAndDelete(id)
res.status(200).json({
    status:200,
    message:"Product are deleted Successfully"

})
    }catch(error){
        res.status(500).json({
            status:500,
            error:error.message
        
        })
    }
    
}




exports.productDescriptions=async(req,res)=>{
    try{
    const id=req.params.id
    const productdescdata=await productTable.aggregate([
        {
            $match: { _id: new mongoose.Types.ObjectId(id) }
        },
        {
            $lookup:{
                from:'reviews',
                localField:"_id",
                foreignField:"productId" ,
                as:"review"
            }
        },
        {
            $addFields: {
              reviewCount: { $size: "$review" },  // Count the number of reviews
              averageRating: {                    // Calculate the average rating
                $cond: {
                  if: { $gt: [{ $size: "$review" }, 0] },  // Check if there are reviews
                  then: { $avg: "$review.Rating" },        // If there are reviews, calculate the average
                  else: 0                                  // If no reviews, set averageRating to 0
                }
              }
            }
          }
        ]);
    
    
    res.status(200).json({
        status:200,
        productdescdata:productdescdata
    })
}catch(error){
    res.status(500).json({
        status:500,
        error:error.message
    })

}
    
}



exports.fiterProduct=async(req,res)=>{
    try{
    const handleForm=req.body
    let query={}
    if(handleForm.all){
        query.product_actual = { $gte: 0 };
      }
    if (handleForm.price1) {
        query.product_actual = { $gte: 0, $lte: 100 };
        
      }
    
      if (handleForm.price2) {
        query.product_actual = { $gte: 100, $lte: 200 };
      }
      if (handleForm.price3) {
        query.product_actual = { $gte: 200, $lte: 300 };
      }
      if (handleForm.price4) {
        query.product_actual = { $gte: 300, $lte: 400 };
      }
      if (handleForm.price5) {
        query.product_actual = { $gte: 400, $lte: 500 };
      }
      const countdoc=await productTable.countDocuments(query)
     

      const product=await productTable.aggregate([
        {
            $match: query 
        },
        {
            $lookup:{
                from:'reviews',
                localField:"_id",
                foreignField:"productId" ,
                as:"review"
            }
        },
        {
            $addFields: {
              reviewCount: { $size: "$review" },  // Count the number of reviews
              averageRating: {                    // Calculate the average rating
                $cond: {
                  if: { $gt: [{ $size: "$review" }, 0] },  // Check if there are reviews
                  then: { $avg: "$review.Rating" },        // If there are reviews, calculate the average
                  else: 0                                  // If no reviews, set averageRating to 0
                }
              }
            }
          }
        ]);
      
      res.status(200).json({
        status:200,
        data:product
      })
    }catch(error){
        res.status(500).json({
            status:500,
            error:error.message
          })

    }
}


exports.paginations=async(req,res)=>{
  try{
  let{page,limit}=req.query

   page=parseInt(page) || 1
   limit=parseInt(limit)  || 10
   const currentPage=(page-1)*limit
   
   const products=await productTable.find().skip(currentPage).limit(limit)
   
   const totalPage=await productTable.countDocuments()
  res.status(200).json({
    data:products,
    totalPage:Math.ceil(totalPage/limit),
    page:page
  
  })
}catch(error){
  res.status(500).json({
    error:error.message
  
  })

}




    
}


exports.productcart=async(req,res)=>{
  try{
    const { id, loginEmail } = req.body;
    const objectIds = id.map(item => new mongoose.Types.ObjectId(item));
    
    const cartData = await productTable.aggregate([
      {
        $match: {
          _id: { $in: objectIds.map(id => new mongoose.Types.ObjectId(id)) } 
        }
      },
      {
        $lookup: {
          from: 'addtocarts',  
          let: { product_id: '$_id' },  
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$productId', '$$product_id'] },  
                    { $eq: ['$user_id', loginEmail] }  
                  ]
                }
              }
            }
          ],
          as: 'cartDetails'  
        }
      },
      {
        $match: {
          cartDetails: { $ne: [] }  
        }
      }
    ]);
    
   
    
    res.status(200).json({
      status:200,
      cartData:cartData
     })   
}catch(error){
  
  res.status(500).json({
    status:500,
    error:error.message
   })

}
 
}


exports.showOfferProducts=async(req,res)=>{
  try{
  const offerstr=req.params.offer
  const offer=Number(offerstr)
  
  const product=await productTable.aggregate([
    {
      $match: {
        offer: offer  
      }
    },
    {
        $lookup:{
            from:'reviews',
            localField:"_id",
            foreignField:"productId" ,
            as:"review"
        }
    },
    {
        $addFields: {
          reviewCount: { $size: "$review" },  
          averageRating: {                    
            $cond: {
              if: { $gt: [{ $size: "$review" }, 0] },  
              then: { $avg: "$review.Rating" },        
              else: 0                                  
            }
          }
        }
      }
    ]);
  
  res.status(200).json({
    status:200,
    offerData:product
  })
}catch(error){
  res.status(500).json({
    status:500,
    error:error.message
  })


}
}


exports.showrecentProduct = async (req, res) => {
  try {
    const product = await productTable.aggregate([
      {
        $lookup: {
          from: 'recents',  
          localField: '_id',  
          foreignField: 'productId',  
          as: 'recentData'  
        }
      },
      {
        $lookup: {
          from: 'recent',  
          let: { productId: '$_id' }, 
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$productId', '$$productId'] 
                }
              }
            }
          ],
          as: 'recentDataPipeline' 
        }
      },
      {
        $lookup: {
          from: 'reviews', 
          localField: '_id',  
          foreignField: 'productId',  
          as: 'review'  // Store the reviews data in the 'review' field
        }
      },
      // Match: Filter to include only products that have corresponding recent entries
      {
        $match: {
          $expr: {
            $gt: [{ $size: "$recentData" }, 0]  // Ensure there is at least one match in recentData
          }
        }
      },
      // Add Fields: Add review count and average rating
      {
        $addFields: {
          reviewCount: { $size: "$review" },  // Count the number of reviews
          averageRating: {                    // Calculate the average rating
            $cond: {
              if: { $gt: [{ $size: "$review" }, 0] },  // If there are reviews
              then: { $avg: "$review.Rating" },        // Calculate the average of review ratings
              else: 0                                  // If no reviews, set averageRating to 0
            }
          }
        }
      }
    ]);

    // Send the response with product data
    res.status(200).json({
      status: 200,
      data: product
    });
  } catch (error) {
    // Handle any errors
    res.status(500).json({
      status: 500,
      error: error.message
    });
  }
};


exports.wishlistproducts=async(req,res)=>{
  const { loginEmail } = req.body;

  try {
    const wishlistdata = await productTable.aggregate([
      {
        $lookup: {
          from: 'wishlists',  // The 'wishlists' collection
          localField: '_id',  // The product's _id
          foreignField: 'productId',  // The wishlists' productId
          as: 'wishlist'  // Store the wishlist data in the 'wishlist' field
        }
      },
      {
        $unwind: "$wishlist"  // Unwind the 'wishlist' array to filter based on wishlistEmail
      },
      {
        $match: {
          "wishlist.wishlisEmail": loginEmail  // Match wishlist's email with loginEmail from req.body
        }
      },
      {
        $lookup: {
          from: 'wishlists',  // Collection name for 'recent'
          let: { productId: '$_id' },  // Use the product _id for comparison
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$productId', '$$productId']  // Compare recent's productId with product's _id
                }
              }
            }
          ],
          as: 'recentDataPipeline'  // Store the result in a different field
        }
      },
      {
        $lookup: {
          from: 'reviews',  // The 'reviews' collection
          localField: '_id',  // The product's _id
          foreignField: 'productId',  // The reviews' productId
          as: 'review'  // Store the reviews data in the 'review' field
        }
      },
    
    
      {
        $addFields: {
          reviewCount: { $size: "$review" },  // Count the number of reviews
          averageRating: {                    // Calculate the average rating
            $cond: {
              if: { $gt: [{ $size: "$review" }, 0] },  // If there are reviews
              then: { $avg: "$review.Rating" },        // Calculate the average of review ratings
              else: 0                                  // If no reviews, set averageRating to 0
            }
          }
        }
      }
    ])
   
  res.status(200).json({
    status:200,
    wishlistdata:wishlistdata,

})
  
  }
    catch(error){
  res.status(500).json({
      status:500,
      error:error.message
  })

}

}


exports.shippingdata=async(req,res)=>{
  const{cart,loginEmail}=req.body
  try{
 for(let k in cart.item){
  const id = new mongoose.Types.ObjectId(k);
  const pdata=await productTable.findById(id)
  const newshippingdata=new orderTable({
    username:loginEmail,
    pname:pdata.product_name, 
    pdesc:pdata.product_desc,
    qty:cart.item[k],
    price:cart.item[k]*pdata.product_actual

  })
  newshippingdata.save()
  }
  res.status(200).json({
    status:201,
    message:"Data has been successfully saved"
  })
}catch(error){
  
  res.status(500).json({
    status:500,
    message:error.message
  })

}
}


exports.testingProuduct=async(req,res)=>{
const testingData=  await productTable.aggregate([{
    $lookup:{
      from:"reviews",
      localField:"_id",
      foreignField:"productId",
      as:"review"
    }
    },

  ])

  res.status(200).json({
    status:200,
    data:testingData
  })

}



exports.searching=async(req,res)=>{
  try{
  const searchingData=await productTable.find({
    "$or":[
      {
        "product_name":{$regex:req.params.searchitem}
      }
    ]
  })
res.status(200).json({
  status:200,
  searching:searchingData
})

}catch(error){
  res.status(500).json({
    status:500,
    error:error.message
  })

}
    
}