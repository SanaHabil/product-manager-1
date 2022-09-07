import React,{useEffect} from 'react'
import axios from 'axios'
import styles from '../static/All.module.css'
import {Link} from 'react-router-dom'

const All = (props) => {
    const {products,setProducts}= props;

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/products')
        .then((res)=>{
            setProducts(res.data.products)
        })
        .catch((err)=>{
            console.log(err)
        })
    })

    return (
    <div>
        <h1>All Products</h1>
        <div className={styles.cards}>
        {
            products.map((item,idx)=>(
                <div className={styles.card} key={idx}>
                    {item.title}<br/> 
                    {item.price}<br/>
                    {item.description}<br/> <br/>
                    <Link className="" to={`/home/products/${item._id}`}> Product Details</Link>
                </div>
            ))
        }
        </div>
    </div>
)
}

export default All