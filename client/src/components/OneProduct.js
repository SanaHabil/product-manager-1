import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import styles from '../static/OneProduct.module.css'

const OneProduct = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/products/' + id)
        .then((res)=>{
            console.log(res.data.product[0]);
            setProduct(res.data.product[0]);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
return (
    <div className={styles.cards}>
        <div className={styles.card}>
            <p>Product Title:{product.title}</p>
            <p>Product Price:{product.price}</p>
            <p>Product Description:{product.description}</p>
        </div>
    </div>
)
}
export default OneProduct