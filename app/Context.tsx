"use client"
import React, { createContext, useEffect, useState, ReactNode, useContext } from "react"
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth"
import { auth } from "@/firebase"

type Props = {
    menu: boolean,
    setMenu: React.Dispatch<React.SetStateAction<boolean>>,
    user: any,
    setUser: React.Dispatch<React.SetStateAction<null>>,
    googleSignIn: () => void,
    logout: () => void,
}

const defaultContext = {
    menu: false,
    setMenu: () => { },
    user: null,
    setUser: () => { },
    googleSignIn: () => { },
    logout: () => { }


}

export const AppContext = createContext<Props>(defaultContext)


const Context = ({ children }: { children: ReactNode }) => {
    const [menu, setMenu] = useState(false)
    const [user, setUser] = useState(null)

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [user])

    return (
        <AppContext.Provider value={{ menu, setMenu, user, setUser, googleSignIn, logout }}>
            {children}
        </AppContext.Provider>
    )
}
export default Context
