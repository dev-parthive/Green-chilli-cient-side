import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext()


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
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
        setLoading(true)
         return signInWithPopup(auth, googleProvider)
    }
//githubSignIn
const githubSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
}
//login 
const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)

}

// Logout/ signOut 
const logOut = () =>{
    return signOut(auth)
}




// observer (je user login kora ase naki nai ata dhekar jonno ) 
useEffect( ()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser)
        setUser(currentUser)
        setLoading(false)
    });
    return () =>{
        return unSubscribe
    }
}, [])


    const authInfo = {
     user, loading, createUser , googleSignIn, githubSignIn , signIn , logOut , 
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;