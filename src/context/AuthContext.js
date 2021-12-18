import React, {useContext, useState, useEffect} from 'react'
import {auth, googleAuth, facebookAuth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth()
{
    return useContext(AuthContext)
}

export  function AuthProvider({children}) {

    const [currentuser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password)
    {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password)
    {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function googlelogin()
    {
        return auth.signInWithPopup(googleAuth)
    }

    function facebooklogin()
    {
        return auth.signInWithPopup(facebookAuth)
    }

    function logout()
    {
        return auth.signOut()
    }

    function resetPassword(email)
    {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>
            {
                setCurrentUser(user)
                setLoading(false)
            })

            return unsubscribe

    }, [])

   

    const value = {
        currentuser,
        signup,
        login,
        googlelogin,
        facebooklogin,
        logout,
        resetPassword
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}

        </AuthContext.Provider>
            
    )
}
