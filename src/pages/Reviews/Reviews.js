import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import EditReviewCard from './EditReviewCard';

const Reviews = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const [reviews, setReviews]  = useState({})
    useEffect( ()=>{
         fetch(`http://localhost:5000/review/${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setReviews(data.data)
        })
    }, [user?.email])
    console.log(reviews)

    return (
      <div>
        {
            reviews?.length <0  ? <><h2 className='text-2xl text-center text-orange-600'>You don't have any review</h2></>  : <></>
        } 
       <div className='mb-10 grid grid-cols-1  md:grid-cols-2 gap-10 lg:grid-cols-3'>
       {
         reviews?.length &&     reviews.map( review => <EditReviewCard key={review._id} review={review}></EditReviewCard>)
        }
       </div>
      </div>
    );
};

export default Reviews;