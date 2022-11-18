import React, { useContext } from 'react';
import { FaGithub, FaGoogle, FaToiletPaperSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {user, loading, createUser, googleSignIn  , githubSignIn } = useContext(AuthContext)
const hanleSignup = (event) =>{
    event.preventDefault()
    const form = event.target ;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value
    // console.log(name, email, password)
    createUser(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user)
        toast.success("user created")
        form.reset()

    } )
    .catch(err =>{
        const message = err.message;
        toast.error(`${message}`)
    })
}
const handleGoogleSignIn = ()=>{
    googleSignIn()
    .then(result =>{
        const user = result.user ;
        console.log(user)
        toast.success("user created")
    }) 
    .catch(err =>{
        const message = err.message;
        toast.error(message)
    })
}
const handleGithubSignIn = ()=>{
    githubSignIn()
    .then(result => {
        const  user = result.user;
        console.log(user)
        toast.success("user created succesfully")
    })
}
   
    return (
        <div className='mx-auto m-8 rounded-2xl bg-base-300 p-8 shadow-lg shadow-blue-500/50 w-1/3'>
            <h2 className='text-center text-orange-600 text-3xl mb-2'>Register</h2>
            <p className='text-center text-xl '>Create a new account </p>
            <form onSubmit={hanleSignup} >
                <p className='mb-2'>Name</p>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-accent w-full max-w-xs" />
                <p className='mb-2 mt-4'>Email</p>
                <input name='email' type="email" placeholder="Your Email" className="mb-4 input input-bordered input-accent w-full max-w-xs" />
                <p className='mb-2 mt-4'>Password</p>
                <input name='password' type="password" placeholder="Password" className="mb-4 input input-bordered input-accent w-full max-w-xs" />
                <div className='flex justify-center items-start'>
                <button type="submit" className='btn btn-outline btn-success text-center'>Submit</button>
                </div>
            </form>
            <div className='text-center mt-4'>

                <span >-------------OR Login With --------------</span>
               
                <div className='flex justify-center items-center mt-4 '>
                    <div><FaGoogle onClick={handleGoogleSignIn} className='mr-5 text-2xl cursor-pointer'></FaGoogle></div>
                    <div><FaGithub onClick={handleGithubSignIn} className='text-2xl cursor-pointer'></FaGithub></div>
                </div>
            </div>
        <ToastContainer/>
        </div>
    );
};

export default Register;