import React from 'react';
import { FaStar } from 'react-icons/fa';
import profile from '../../assests/images/profile-picture-5.jpg'

const SingleReview = ({review}) => {
    console.log(review)
    const {img,email, message, name , rating } = review


    return (
       <div className='bg-base-300 p-5 flex justify-between items-center rounded-xl drop-shadow-2xl'>
        <div>
          {
            img ?   <img className='w-12 rounded-xl' src={img} alt="" /> :   <img className='w-12 rounded-xl' src={profile} alt="" />
          }
            <h2><span className='text-orange-600'>name</span>: {name}</h2>
            <h2> <span className='text-orange-500'>Email</span>: {email}</h2>
            <p className='flex items-center'><span className='text-orange-500 mr-2'>Rating: </span><span className='mr-2'>{rating}</span><FaStar style={{color: 'goldenrod'}}></FaStar><FaStar style={{color: 'goldenrod'}}></FaStar><FaStar style={{color: 'goldenrod'}}></FaStar><FaStar style={{color: 'goldenrod'}}></FaStar></p>

        </div>
        <div className='ml-5'>
            <span className='text-orange-400'>review</span> : {message}
        </div>
        
       </div>
    );
};

export default SingleReview;