import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assests/images/pexels-igor-starkov-1307698.jpg'
import useTitle from '../../hooks/useTittle';
import GridGallery from './GridGallery';
import './Home.css'
import Payment from './Payment';
import ProductCard from './ProductCard';
const Home = () => {
    useTitle('Home')
     const [products, setProducts] = useState([])
    useEffect(  ()=>{
        fetch('https://pathabo-server-dev-parthive.vercel.app/service')
        .then(res => res.json())
        .then(data => setProducts(data.data))
    }, [])
    return (
        <div>
            {/* carousel start  */}
            {/* <Slider></Slider> */}
            <div className="banner w-full flex justify-center items-center">
               <div className='text-section text-center text-5xl'>
                <h2>Most popular Cloud Kitchen 
                    <p className='text-center mt-3'>In Chattogram </p>
                    <p className='text-center text-xl mt-3'>Our motto is deliver the best food to our customer. <br /> We try to make sure that every customer will happy and visit our resturent again. </p>
                </h2>
               </div>
            </div>

            <div className='py-9 text-center'>
                <h3 className='text-4xl text-orange-400'>Our Best Food's </h3>
                <div  className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 w-full mx-auto'>
                {
                   products?.length &&  products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
                </div>
              <Link to="/services"> <button className='btn btn-outline btn-success mt-7 px-9 text-center'>See All</button></Link>
            </div>
                <div className='text-center'>
                    <h2 className='text-5xl text-orange-600'>Take Look </h2>
                    <p className='text-2xl'>What kind of dish we have</p>
                </div>
            <GridGallery></GridGallery>
            <Payment></Payment>
          
        </div>
    );
};

export default Home;