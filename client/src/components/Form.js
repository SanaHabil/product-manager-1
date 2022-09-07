import React,{useState} from 'react';
import styles from '../static/Form.module.css';
import TextField from '@mui/material/TextField';
import Button from "@material-ui/core/Button";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'




const Form = (props) =>{
    
    const [title,setTitle] = useState(" ");
    const [price,setPrice] = useState(" ");
    const [description,setDescription] = useState(" ");
    const {products, setProducts} = props;
    const navigate = useNavigate()
    
    const submitHandler=(e)=>{
        e.preventDefault();
            axios.post('http://localhost:8000/api/products',{
            title,
            price,
            description
            })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setTitle("");
                setPrice("");
                setDescription("");
                setProducts([...products, res.data]);
                navigate('/home/products');
            })
            .catch((err)=>{
                console.log(err);
            })
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
            <form onSubmit={submitHandler}>
                <h2>Add A Product</h2><br/>
                <div>
                    <TextField label="Title" onChange={titleHandler} value={title} />
                </div>
                <br/>
                <div>
                    <TextField label="Price" onChange={priceHandler} value={price} />
                </div>
                <br/>
                <div>
                    <TextField label="Description" onChange={descriptionHandler} value={description} />
                </div>
                <br/>
                <Button onClick={submitHandler} type="submit" size="large"  variant="contained">Create</Button>
            </form>
        </div>
    );
};

export default Form