import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const AddReviews = () => {
    const {id} = useParams()
    console.log(id)
    const {user} = useContext(AuthContext)

    console.log(user?.photoURL)
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target
        const review = {
            name: event.target.name.value,
            email: event.target.email.value,
            rating: event.target.rating.value,
            message: event.target.message.value, 
            product_id : id,
            img: user.photoURL,   
        }
        
        console.log(review)
        fetch("https://pathabo-server-dev-parthive.vercel.app/addReview", {
            method: "POST", 
            headers: {
                "content-type" : "application/json"
            }, 
            body: JSON.stringify(review)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
                toast.success(`${data.message}`)
                form.reset()

            }else{
                toast.error(`${data.error}`)
            }
        })
        .catch(err => {
            toast.error(`${err.message}`)
        })
        
    }
    return (
        <div>
           <div className='bg-base-300 w-2/3 mx-auto flex justify-center py-9 my-9 rounded-2xl shadow-lg'>
            <form onSubmit={handleSubmit} >
                <h1 className='text-center text-orange-500 text-2xl mb-4'>Write your review here </h1>
                <p>Full name</p>
                <input name='name' type="text" placeholder="Your name" className="input input-bordered input-info w-full max-w-xs" required/>
                <p>Email</p>
                <input name='email' type="email" placeholder="Your Email" className="input input-bordered input-info w-full max-w-xs" defaultValue={user?.email} readOnly/>
                <p>Rating</p>
                <input name='rating' type="number" placeholder="Rating" className="input input-bordered input-info w-full max-w-xs" required />
                <p>Wrtie Your Review</p>
                <textarea name='message' className="textarea textarea-info" placeholder="What do you think about this service" required></textarea> 
                <br />
                <button className='btn btn-outline btn-info mt-4'  type="submit">Submit</button>
            </form>
           </div>
        </div>
    );
};

export default AddReviews;