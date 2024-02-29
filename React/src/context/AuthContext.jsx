import React, { createContext, useEffect, useState } from "react";
import { getUserData } from "../Helper/dataToCookie";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (getUserData() != null) {
            console.log(getUserData())
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
