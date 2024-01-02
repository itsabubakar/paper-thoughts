"use client"
import React, { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "@/firebase";

type User = {
    uid: string;
    email: string;
    displayName: string;
    admin?: boolean;
    // Add other user details as needed
};

type Props = {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    googleSignIn: () => void;
    logout: () => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    profile: {
        penName: string;
        about: string;
        instagram: string;
        twitter: string;
        email: string;
    };
    setProfile: React.Dispatch<React.SetStateAction<{
        penName: string;
        about: string;
        instagram: string;
        twitter: string;
        email: string;
    }>>;
};

const defaultContext = {
    menu: false,
    setMenu: () => { },
    user: null,
    setUser: () => { },
    googleSignIn: () => { },
    logout: () => { },
    loading: false,
    setLoading: () => { },
    profile: {
        penName: '',
        about: '',
        instagram: '',
        twitter: '',
        email: '',
        admin: false,
    },
    setProfile: () => { }
};

export const AppContext = createContext<Props>(defaultContext);

const Context = ({ children }: { children: ReactNode }) => {
    const [menu, setMenu] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({
        penName: '',
        about: '',
        instagram: '',
        twitter: '',
        email: ''
    });

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const logout = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser: any) => {
            setUser(currentUser);

        });

        return () => unsubscribe();
    }, []);


    return (
        <AppContext.Provider value={{ profile, setProfile, menu, setMenu, user, setUser, googleSignIn, logout, loading, setLoading }}>
            {children}
        </AppContext.Provider>
    );
};

export default Context;
