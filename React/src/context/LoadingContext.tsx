import { createContext, useState, ReactNode, FC } from "react";
import Loader from 'react-js-loader';
import classes from './LoadingContext.module.css';

interface ILoadingContext {
    isLoading: boolean;
    setIsLoading: (loading:boolean) => void;
}


export const LoadingContext = createContext<ILoadingContext>({setIsLoading(loading) {
    loading = false
}, isLoading: false});
export const LoadingProvider:FC<{ children:ReactNode }> = ({ children }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)


    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {isLoading &&
            <div className={classes.loader_wrap}>
                <Loader type="bubble-ping" bgColor={'#4565FF'} color={'#000'} title={"Загрузка"} size={100} />
            </div>}
            {children}
        </LoadingContext.Provider>
    )
}
