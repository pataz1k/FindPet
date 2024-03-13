import React, { createContext, useEffect, useState } from "react";
import { getUserId } from "../Helper/dataToCookie";

interface IAuthContext {
    isAuth: boolean;
    setIsAuth?: (isAuth:boolean) => void;
}
const defaultState = {
    isAuth: true,
}


export const AuthContext = createContext<IAuthContext>(defaultState);
export const AuthProvider = ({ children }:any) => {

      

    const [isAuth, setIsAuth] = useState(true)

    useEffect(() => {
        if (getUserId() != null) {
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
