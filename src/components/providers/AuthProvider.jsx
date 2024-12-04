
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const name= 'sunjit';

    const [user,setUser]= useState(null);
    const [loading, setLoading]= useState(true);
    const [imageUrl, setImageUrl] = useState('');
    const [targetPath, setTargetPath]= useState('/');
    const [resetEmail, setResetEmail]= useState('');

   

  

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }
    const sendVerification = ()=>{
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    }
    useEffect( ()=>{

        const unSubscribe= onAuthStateChanged(auth, currentUser =>{
        //    console.log('Current User: ', currentUser);
        //    console.log('ProviderId:', currentUser.providerData[0].providerId)
           let providerId= currentUser?.providerData[0].providerId;
            
        //    console.log('Hello...', currentUser);
            setUser(currentUser);
            setLoading(false);

      
        })
        return (()=>{
            unSubscribe(); // cleanup 
        })

    },[])
    
    const authInfo ={
        name,
        user,
        setUser,
        loading, setLoading,
        createUser,
        signInWithGoogle,
        signInUser,
        signOutUser,
        sendVerification,
        imageUrl, setImageUrl,
        targetPath, setTargetPath,
        resetEmail, setResetEmail,
    }
    return (
       <AuthContext.Provider value={authInfo}>
          {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;