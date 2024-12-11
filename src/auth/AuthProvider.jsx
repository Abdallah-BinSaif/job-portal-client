import React, {useEffect, useState} from 'react';
import AuthContext from "./AuthContext.jsx";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    GoogleAuthProvider,
    signOut,
} from "firebase/auth";
import auth from "../../firebase.init.js";




const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                setCurrentUser(user)
            }else{
                setCurrentUser(null)
            }
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    }, []);


    const authInfo = {
        currentUser,
        loading,
        createUser,
        signOutUser,
        signInUser,
        createUserWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;