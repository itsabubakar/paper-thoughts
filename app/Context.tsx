"use client"
import React, { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "@/firebase";
import { doc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';

type User = {
    uid: string;
    email: string;
    displayName: string;
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
};

export const AppContext = createContext<Props>(defaultContext);

const Context = ({ children }: { children: ReactNode }) => {
    const [menu, setMenu] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

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

            // Check if the user is authenticated
            if (currentUser) {
                const { uid, email, displayName } = currentUser;

                // Check if the user with the same email already exists in the 'users' collection
                const userQuery = query(collection(db, 'users'), where('email', '==', email));

                try {
                    const userQuerySnapshot = await getDocs(userQuery);

                    if (userQuerySnapshot.docs.length > 0) {
                        // If the user already exists, log a message
                        console.log('User already exists in the users collection');
                    } else {
                        // If the user doesn't exist, add them to the 'users' collection
                        await setDoc(doc(db, 'users', uid), {
                            uid,
                            email,
                            displayName,
                            // Add other user details as needed
                        });

                        console.log('User added to users collection');
                    }
                } catch (error) {
                    console.error('Error querying users collection:', error);
                }
            }
        });

        return () => unsubscribe();
    }, []);


    return (
        <AppContext.Provider value={{ menu, setMenu, user, setUser, googleSignIn, logout, loading, setLoading }}>
            {children}
        </AppContext.Provider>
    );
};

export default Context;
