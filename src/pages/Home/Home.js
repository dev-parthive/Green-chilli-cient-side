import React from 'react';
import img1 from '../../assests/images/pexels-igor-starkov-1307698.jpg'
import './Home.css'
const Home = () => {
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
          
        </div>
    );
};

export default Home;