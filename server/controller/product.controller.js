const Product = require('../models/product.model')

const ProductController ={

//Create
create:(req,res)=>{
    Product.create(req.body)
    .then((product) =>{
        res.json({product:product})
    })
    .catch((err)=> {
        res.json({message:"error",error:err})
    })
},
//Read
getAll:(req,res)=>{
    Joke.find({})
    .then((products)=>{
        res.json({products:products})
    })
    .catch((err)=> {
        res.json({message:"error",error:err})
    })
},
getOne:(req,res)=>{
    Product.find({_id:req.params.id})
    .then((product)=>{
        res.json({product:product})
        })
        .catch((err)=>{
            res.json({message:"error",error:err})
        })
},
//Update
update:(req,res)=>{
    Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
    .then((product)=>{
        res.json({product:product})
    })
    .catch((err) =>{
        res.json({message:"error",error:err})
    })

},
//Delete
delete:(req, res) =>{
    Product.findOneAndDelete(req.params.id)
    .then((product)=>{
        res.json({product:product})
    })
    .catch((err) =>{
        res.json({message:"error",error:err})
    })
}

}
module.exports = ProductController