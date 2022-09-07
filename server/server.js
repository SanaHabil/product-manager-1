const express = require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const cors = require('cors');

// npm i cors in every project
app.use(cors());
app.use(express.json());
require('./config/mongoose.config')
require('./routes/product.routes')(app)


app.listen(port,()=>console.log(`Locked and Loaded on Port ${port}`))
