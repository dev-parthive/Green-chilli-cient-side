import React from 'react';
import { toast } from 'react-toastify';

const AddServices = () => {
    const handleSubmit =(e) =>{
        e.preventDefault()
        const service = {
            name: e.target.name.value, 
            price: e.target.price.value, 
            rating: e.target.rating.value,
            description: e.target.description.value,
            img: e.target.img.value,
        }
        console.log(service)
        fetch(`http://localhost:5000/add-service`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
                
            },
            body: JSON.stringify(service)
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.success){
                toast.success(`${data.message}`)

            }
            else{
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
                <h1 className='text-center text-orange-500 text-2xl mb-4' >Add a Service  </h1>
                <p>Service name</p>
                <input name='name' type="text" placeholder="service name" className="input input-bordered input-info w-full max-w-xs"  required/>
                <p>Image URL</p>
                <input name='img' type="text" placeholder="suggest imagebb link" className="input input-bordered input-info w-full max-w-xs" />
                <p>Price</p>
                <input name='price' type="number" placeholder="Price " className="input input-bordered input-info w-full max-w-xs" required />
                <p>Rating</p>
                <input name='rating' type="number" placeholder="Rating " className="input input-bordered input-info w-full max-w-xs" required />
                <p>Description About product</p>
                <textarea name='description' className="textarea textarea-info" placeholder="Tell us about the product" required></textarea> 
                <br />
                <button className='btn btn-outline btn-info mt-4'  type="submit">Submit</button>
            </form>
           </div>
        </div>
    );
};

export default AddServices;