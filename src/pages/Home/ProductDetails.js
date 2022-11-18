import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const ProductDetails = () => {
    const {id} = useParams()
    const [prodcut , setProduct] = useState({})
    useEffect( ()=>{
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.data)
            if(data.success){
                setProduct(data)

            }else{
                toast.error("data couldn't load")
            }
        })
    },[])
    return (
        <div>
            <h2>THis is {id} details  page</h2>
        </div>
    );
};

export default ProductDetails;