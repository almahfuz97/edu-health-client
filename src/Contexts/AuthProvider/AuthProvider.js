import React, { createContext } from 'react'
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

export default function AuthProvider({ children }) {

    const user = { name: 'abdullah' }
    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
