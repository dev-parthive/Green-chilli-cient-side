import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
    const {id} = useParams()
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()
    // const {id} = route
    const [review, setReview] = useState({})
    console.log(id)
    useEffect( ()=>{
        fetch(`http://localhost:5000/edit-review/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReview(data.data)
        })
    }, [id, refresh])
    const {name, email , rating, message} = review
    // console.log(name, email , rating, message)
    console.log(review)
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const review ={
            name: e.target.name.value,
            email:e.target.email.value,
            rating: e.target.rating.value, 
            message: e.target.message.value
        }
        // console.log(review)
        //akn kaj holo edit kora review k db te patano
        fetch(`http://localhost:5000/edit-review/${id}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            }, 
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then( data => {
            if(data.success){
                toast.success(`${data.message}`)
                navigate("/reviews")
            }
            else{
                toast.error(`${data.error}`)
            }
        })
        .catch(err => toast.error(`${err.message}`))
    }
    return (
        <div>
           
           <div className='bg-base-300 w-2/3 mx-auto flex justify-center py-9 my-9 rounded-2xl shadow-lg'>
            <form onSubmit={handleSubmit} >
                <h1 className='text-center text-orange-500 text-2xl mb-4' >Edit your review here </h1>
                <p>Full name</p>
                <input name='name' type="text" placeholder="Your name" className="input input-bordered input-info w-full max-w-xs" defaultValue={name} required/>
                <p>Email</p>
                <input name='email' type="email" placeholder="Your Email" className="input input-bordered input-info w-full max-w-xs" defaultValue={email} />
                <p>Rating</p>
                <input name='rating' type="number" placeholder="Rating " defaultValue={rating} className="input input-bordered input-info w-full max-w-xs" required />
                <p>Wrtie Your Review</p>
                <textarea name='message' className="textarea textarea-info" placeholder="What do you think about this service" defaultValue={message} required></textarea> 
                <br />
                <button className='btn btn-outline btn-info mt-4'  type="submit">Submit</button>
            </form>
           </div>
        </div>
    );
};

export default Edit;