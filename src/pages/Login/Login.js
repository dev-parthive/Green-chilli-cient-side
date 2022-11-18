import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const {user, loading,  googleSignIn  , githubSignIn, signIn } = useContext(AuthContext)


    const handleSignIn = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value; 
        console.log(email, password)
        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset()
            toast.success("user loggedIn Successfully")
        })
        .catch(err =>{
            const message = err.message
            toast.error(`${message}`)
        })
        
    } 

    const handleGoogleSignIn = () => {
        googleSignIn() 
        .then(result => {
            const user = result.user ;
            toast.success("user created")
        })
        .catch(err =>{
            const message = err.message
            toast.error(`${message}`)
        })

    }


    const handleGithubSignIn = ()=>{
        githubSignIn()
        .then(result => {
            const user = result.user
            console.log(user)
            toast.success("User created Successfully")

        })
        .catch(err =>{
            const message  = err.message;
            toast.error(`${message}`)
        })
    }
    return (
        <div className='mx-auto m-8 rounded-2xl bg-base-300 p-8 shadow-lg shadow-blue-500/50 w-1/3'>
            <h2 className='text-center text-orange-600 text-3xl mb-2'>Login</h2>
            <p className='text-center text-xl '>Login to your previous account </p>
            <form onSubmit={handleSignIn} >
                <p className='mb-2 mt-4'>Email</p>
                <input name='email' type="email" placeholder="Your Email" className="mb-4 input input-bordered input-accent w-full max-w-xs" />
                <p className='mb-2 mt-4'>Password</p>
                <input name='password' type="password" placeholder="Password" className="mb-4 input input-bordered input-accent w-full max-w-xs" />
                <div className='flex justify-center items-start'>
                <button type="submit" className='btn btn-outline btn-success text-center'>Login</button>
                </div>
            </form>
            <div className='text-center mt-4'>

                <span >-------------OR Login With --------------</span>
               
                <div className='flex justify-center items-center mt-4 '>
                    <div><FaGoogle onClick={handleGoogleSignIn} className='mr-5 text-2xl cursor-pointer'></FaGoogle></div>
                    <div><FaGithub onClick={handleGithubSignIn} className='text-2xl cursor-pointer'></FaGithub></div>
                </div>
            </div>
            <h2 className='mt-4 text-center' >New to this site ? <Link to="/register" className='underline text-orange-500'>SignUp</Link></h2>
        <ToastContainer/>
        </div>
    );
};

export default Login;