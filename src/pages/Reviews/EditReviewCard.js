import React, { useContext, useState } from 'react';
import { FaEdit, FaStar, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import profile from '../../assests/images/profile-picture-5.jpg'
import { AuthContext } from '../../Context/AuthProvider';

const EditReviewCard = ({review}) => {
    const{img, email, message, rating, name, _id } = review
    // console.log(img, email, message, rating, name)
    const navigate = useNavigate()
    // const [refresh, setRefresh] = useState(false)
    const {refresh, setRefresh} = useContext(AuthContext)
    
    //handleEdit
const handleEdit =(id)=>{
    console.log('button is clicked ', id)
    navigate(`/edit-review/${id}`)
}

//handleDelete
const handleDelete= (id) =>{
    fetch(`https://pathabo-server-dev-parthive.vercel.app/delete/${id}`, {
        method: "DELETE",
    })
    .then( res => res.json())
    .then(data =>{
        console.log(data)
        if(data.success){
            toast.success(`${data.message}`)
            setRefresh(!refresh)
        }
        else{
            toast.error(`${data.error}`)
        }
    })
    .catch(err => toast.error(`${err.message}`))
}

    return (
        <div className='bg-base-300 p-5 rounded-xl drop-shadow-2xl'>
      <div className='flex justify-between items-center '>
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
      <div className='flex justify-center mt-3 text-3xl text-sky-600 items-center'>
        <div className='mr-4 tooltip' data-tip="Edit"><FaEdit  onClick={()=>handleEdit(_id)}className='cursor-pointer'></FaEdit></div>
        <div  className='tooltip' data-tip="Delete"><FaTrashAlt className='cursor-pointer ' onClick={()=> handleDelete(_id)}></FaTrashAlt ></div>
      </div>
        
       </div>
    );
};

export default EditReviewCard;