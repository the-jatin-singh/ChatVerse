import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import {auth} from '../firebase'

const AuthContext = createContext()

// providerContext
export const AuthProvider =({children})=>{

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //  sign in function
    const signinWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider )
    }
    // signout
    const signout = () =>{
        signOut(auth)
    }

    const value = {
        currentUser,
        setCurrentUser,
        signinWithGoogle,
        signout

    }


    // set Current User
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false)
        });

        return unsubscribe;

    },[])

    return(
        <AuthContext.Provider value={value} >
            {!loading &&  children}
        </AuthContext.Provider>
    )
} 

export const UserAuth = () => {
    return useContext(AuthContext);
}