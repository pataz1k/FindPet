import { createContext, useEffect, useState, FC, ReactNode } from "react";
import { getUserId } from "../Helper/dataToCookie";

interface IAuthContext {
    isAuth: boolean;
    setIsAuth: (auth:boolean) => void;
}



export const AuthContext = createContext<IAuthContext>({isAuth: true,
    setIsAuth(auth) {
        auth = true;
    }});
export const AuthProvider:FC<{ children:ReactNode }> = ({ children }) => {

    const [isAuth, setIsAuth] = useState<boolean>(true)

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
