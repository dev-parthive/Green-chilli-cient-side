import React, { useContext, useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Review from '../AddReviews/Review';
import ShowReview from '../AddReviews/ShowReview';
import { AuthContext } from '../../Context/AuthProvider';
const ProductDetails = () => {
    const {id} = useParams()
    const [product , setProduct] = useState({})
    const [refresh, setRefresh] = useState(false)
    const {productName, setProductName} = useContext(AuthContext)
    // setProduct(product.name)
    // console.log(productName)
    useEffect( ()=>{
        fetch(`https://pathabo-server-dev-parthive.vercel.app/product/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.product)
            if(data.success){
                setProduct(data.product)

            }else{
                toast.error("data couldn't load")
            }
        })
    },[])
    const {img, name, price, description, rating} = product
    console.log(product)

    return (
       <div>
         <div className='flex justify-center py-8'>
            <div className="card w-2/3 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
         <PhotoProvider>
            <PhotoView src={img}>
            <img src={img} style={{width: '620px'}} alt="Shoes" className="rounded-xl" />
            </PhotoView>
         </PhotoProvider>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-orange-500">{name}</h2>
          <p className='text-2xl'>{description}</p>
          <div className='w-full flex justify-around items-center'>
            <div > <span className='text-xl'>price</span>: $ <span className='text-orange-500 text-xl'>{price}</span></div>
            <div className='flex justify-between items-center'><p className='mr-1'> <span className='text-orange-700 text-xl'>Ratings</span>: {rating}</p> <p><FaStar style={{color:'goldenrod'}}></FaStar></p><p><FaStar style={{color:'goldenrod'}}></FaStar></p><p><FaStar style={{color:'goldenrod'}}></FaStar></p><p><FaStar style={{color:'goldenrod'}}></FaStar></p><p><FaStarHalfAlt style={{color:'goldenrod'}}></FaStarHalfAlt></p></div>
          </div>
        </div>
      </div>

        </div>

        <Review name={product.name} id={product._id}></Review>
        <ShowReview  id={product._id}></ShowReview>        

       </div>
    );
};

export default ProductDetails;