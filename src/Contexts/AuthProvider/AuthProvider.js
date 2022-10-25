import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

export default function AuthProvider({ children }) {
    // hooks
    const [user, setUser] = useState(false)
    console.log(user);
    // functions
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser || currentUser === null) {
                setUser(true);
            }
        })

        return () => unsubscribe();
    }, [])

    const authInfo = { user, googleSignIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
