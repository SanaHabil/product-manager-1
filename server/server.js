const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')

app.use(express.json());
require('./config/mongoose.config')
require('./routes/product.routes')(app)


app.listen(port,()=>console.log(`Locked and Loaded on Port ${port}`))
