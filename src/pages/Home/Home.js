import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assests/images/pexels-igor-starkov-1307698.jpg'
import './Home.css'
import ProductCard from './ProductCard';
const Home = () => {
     const [products, setProducts] = useState([])
    useEffect(  ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            {/* carousel start  */}
            {/* <Slider></Slider> */}
            <div className="banner w-full flex justify-center items-center">
               <div className='text-section text-center text-5xl'>
                <h2>Most popular Resturent 
                    <p className='text-center mt-3'>In Chattogram </p>
                    <p className='text-center text-xl mt-3'>Our motto is deliver the best food to our customer. <br /> We try to make sure that every customer will happy and visit our resturent again. </p>
                </h2>
               </div>
            </div>

            <div className='py-9 text-center'>
                <h3 className='text-4xl text-orange-400'>Our Best Food's </h3>
                <div  className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 w-full mx-auto'>
                {
                    products.map(product => <ProductCard product={product}></ProductCard>)
                }
                </div>
              <Link to="/services"> <button className='btn btn-outline btn-success mt-7 px-9 text-center'>See All</button></Link>
            </div>
          
        </div>
    );
};

export default Home;