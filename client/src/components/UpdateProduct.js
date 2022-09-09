import React,{useState,useEffect} from 'react';
import styles from '../static/UpdateProduct.module.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import TextField from '@mui/material/TextField';


const UpdateProduct = () => {
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [description,setDescription] = useState("");
    const navigate = useNavigate()
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/products/'+id)
        .then((res)=>{
            //console.log(res.data.product[0]);
            setTitle(res.data.product[0].title)
            setPrice(res.data.product[0].price);
            setDescription(res.data.product[0].description);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const handelUpdateProd = (e)=>{
        e.preventDefault();
        axios.put('http://127.0.0.1:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res);
                navigate("/home/products");
            })
            .catch(err => console.log(err))
    }
    const titleHandler=(e)=>{
        setTitle(e.target.value)

    }
    const priceHandler=(e)=>{
        setPrice(e.target.value)
    }
    const descriptionHandler=(e)=>{
        setDescription(e.target.value)

    }

return (
    <div className={styles.container}>
            <form onSubmit={handelUpdateProd}>
                <h2>Update A Product</h2><br/>
                <div>
                    <TextField label="Title" onChange={titleHandler} name ="title" value={title} />
                </div>
                <br/>
                <div>
                    <TextField label="Price" onChange={priceHandler} name ="price" value={price} />
                </div>
                <br/>
                <div>
                    <TextField label="Description" onChange={descriptionHandler} name ="description" value={description} />
                </div>
                <br/>
                <Button type="submit" size="large" variant="contained">Update</Button>
            </form>
        </div>
    );
}

export default UpdateProduct