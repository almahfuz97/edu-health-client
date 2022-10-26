import React, { createContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

export default function AuthProvider({ children }) {
    // hooks
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)
    console.log(user);
    // functions
    const googleSignIn = (provider) => {
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
                setUser(currentUser);
                setLoading(true);
            }
        })

        return () => unsubscribe();
    }, [])

    const authInfo = { user, googleSignIn, loading, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
