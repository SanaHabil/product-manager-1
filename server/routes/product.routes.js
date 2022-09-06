const ProductController = require("../controller/product.controller")

const routes = (app)=> {

app.post("/api/products",ProductController.create);

//Read ALl
app.get('/api/products',ProductController.getAll);
//Read One
app.get('/api/products/:id',ProductController.getOne);
//Update
app.put('/api/products/:id',ProductController.update);
//Delete
app.delete('/api/products/:id',ProductController.delete);
}

module.exports = routes