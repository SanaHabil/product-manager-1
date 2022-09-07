import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './components/Form';
import All from './components/All';
import OneProduct from './components/OneProduct';


function App() {
  const [products,setProducts]= useState([])
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element ={ <Form products={products} setProducts={setProducts} />} path="/home" defualt />
        <Route element ={ <All products={products} setProducts={setProducts} />} path="/home/products" />
        <Route element ={ <OneProduct products={products} setProducts={setProducts} />} path="/home/products/:id" />


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
