import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Review = ({id , name}) => {
    console.log(name)
    console.log(id)
    const {user} = useContext(AuthContext)
    return (
        <div>
         {
            user ? <>  <div className='w-2/3 mx-auto bg-base-300 py-9 my-10 drop-shadow-lg  flex lg:flex-row flex-col justify-center items-center md:flex-col'>
            <h2 className='text-3xl'>You can add review for this Service</h2>
            <p><Link to={`/add-review/${id}`}><button className='btn btn-outline btn-primary ml-12  '>Add Review</button></Link></p>
           </div></> 
           :
           <div className='w-2/3 mx-auto bg-base-300 py-9 my-10 drop-shadow-lg  flex flex-col justify-center items-center'>
               <h2 className='text-3xl'>To add your own review. You have to login first</h2>
               <div className='mt-5'>
               <Link to="/register"><button className='btn btn-outline btn-primary mr-5'>Sign UP</button></Link>
               <Link to="/login"><button className='btn btn-outline btn-success'>Login</button></Link>
               </div>
           </div>
         }
        </div>
    );
};

export default Review;