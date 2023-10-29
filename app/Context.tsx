"use client"
import React, { createContext, useState, ReactNode } from "react"

type Props = {
    menu: boolean,
    setMenu: React.Dispatch<React.SetStateAction<boolean>>,
}

const defaultContext = {
    menu: false,
    setMenu: () => { }
}

export const AppContext = createContext<Props>(defaultContext)


const Context = ({ children }: { children: ReactNode }) => {
    const [menu, setMenu] = useState(false)
    return (
        <AppContext.Provider value={{ menu, setMenu }}>
            {children}
        </AppContext.Provider>
    )
}
export default Context