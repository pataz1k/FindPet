import React, { createContext, useEffect, useState } from "react";
import { getUserId } from "../Helper/dataToCookie";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (getUserId() != null) {
            console.log(getUserId())
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
