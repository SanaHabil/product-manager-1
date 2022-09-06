const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1/ProductManagerDB")
.then(()=>{
    console.log("successfully connect to the DB")
})
.catch((err) =>{
    console.log("There is an error connecting to the DB")
})