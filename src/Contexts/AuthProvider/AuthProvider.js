import React, { createContext } from 'react'

const AuthContext = createContext();
export default function AuthProvider({ children }) {
    const user = { name: 'abdullah' }
    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
