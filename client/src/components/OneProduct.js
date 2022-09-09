import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import styles from '../static/OneProduct.module.css'
import {useNavigate} from 'react-router-dom'
// import Button from "@material-ui/core/Button";


const OneProduct = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/products/'+id)
        .then((res)=>{
            //console.log(res.data.product[0]);
            setProduct(res.data.product[0]);
            setProduct(res.data.product[0]);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    const updateHandler = (e)=>{
        navigate(`/home/products/update/${id}`)
    }
    
    const deleteHandler = (id) => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then((res) => {
                // console.log(res)
                setProduct({})
                navigate(`/home/products`)
            })
            .catch((err) => console.log(err))
    }


    
return (
    <div className={styles.cards}>
        <div className={styles.card}>
            <p>Product Title:{product.title}</p>
            <p>Product Price:{product.price}</p>
            <p>Product Description:{product.description}</p>
            <div className={styles.buttonsDiv}>
                <button onClick={updateHandler} type="submit" size="large"  variant="contained" className={styles.btn}>Update</button>
                <button onClick={deleteHandler} type="submit" size="large"  variant="contained" className={styles.btn}>Delete</button>
            </div>
        </div>
        
    </div>
)
}
export default OneProduct