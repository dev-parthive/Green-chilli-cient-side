import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SingleReview from './SingleReview';

const ShowReview = ({id}) => {
    const [reveiws, setReviews] = useState({})
    const [refresh, setRefresh] = useState(false)
    console.log(id)
    useEffect(()=>{
        fetch(`https://pathabo-server-dev-parthive.vercel.app/addReview/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
                setReviews(data.data)
            }else{
                toast(`${data.error}`)
            }
        }) 
        .catch(err => toast(`${err.message}`))
    }, [ refresh, id])
    console.log(reveiws)
    return (
        <div>
           <h2 className='text-center text-orange-400 text-3xl mb-4'>Reviews of our customer's</h2>
          <div className='mb-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3'>
            {
                reveiws?.length &&  reveiws.map( review => <SingleReview key={review._id} review={review}></SingleReview>)
            }
            {
              reveiws?.length <=0 ? <div><h2 className='text-center text-orange-600 text-2xl'>There no review to show </h2></div> : 
              <div> </div>
            }
          </div>
        </div>
    );
};

export default ShowReview;