import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider
const AuthProvider = ({children}) => {
    
    const [user ,setUser ]  = useState(null)
    const [loading, setLoading] = useState(true);
    

    //create user using eamil and password
    const createUser = (email ,  password) =>{
        setLoading(true) 
        return createUserWithEmailAndPassword(auth, email, password)
    }
//googleSignIn 
    const googleSignIn = () =>{
         return signInWithPopup(auth, googleProvider)
    }
//githubSignIn
const githubSignIn = ()=>{
    return signInWithPopup(auth, githubProvider)
}

// observer (je user login kora ase naki nai ata dhekar jonno ) 

    const authInfo = {
     user, loading, createUser , googleSignIn, githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;