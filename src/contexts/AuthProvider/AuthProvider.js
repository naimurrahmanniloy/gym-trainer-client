import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
}
const logOut = () => {
    return signOut(auth)
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
        });
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user, loading, createUser, login, googleSignIn, logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;