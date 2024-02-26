import React, { createContext, useEffect, useState } from "react";
import { getUserData } from "./dataToCookie";
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() =>{
        if (getUserData() !== null) {
            setIsAuth(true)
        }
    },[])

    return(
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
