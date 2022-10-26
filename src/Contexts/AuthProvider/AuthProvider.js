import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

export default function AuthProvider({ children }) {
    // hooks
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    // functions
    // create user with email and password
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // sign in with email and password
    const signIn = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass);
    }

    // sign in with provider eg; google, github, facebook..
    const providerSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // sign out
    const logOut = () => {
        return signOut(auth);
    }


    // onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser || currentUser === null) {
                console.log(currentUser)
                setUser(currentUser);
                setLoading(true);
            }
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { user, providerSignIn, loading, logOut, createUser, signIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
