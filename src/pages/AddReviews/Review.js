import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Review = ({id}) => {
    console.log(id)
    const {user} = useContext(AuthContext)
    return (
        <div>
           <div className='w-2/3 mx-auto bg-base-300 py-9 my-10 drop-shadow-lg  flex justify-center items-center'>
            <h2 className='text-3xl'>You can add review for this Service</h2>
            <p><Link to={`/add-review/${id}`}><button className='btn btn-outline btn-primary ml-12  '>Add Review</button></Link></p>
           </div>
        </div>
    );
};

export default Review;