import { createContext, useState } from "react";
import Loader from 'react-js-loader';
import classes from './LoadingContext.module.css';

interface ILoadingContext {
    isLoading: boolean,
    setIsLoading?: (isLoading:boolean) => void;
}

const defaultState = {
    isLoading: false,
}

export const LoadingContext = createContext<ILoadingContext>(defaultState);
export const LoadingProvider = ({ children }:any) => {

    const [isLoading, setIsLoading] = useState(false)


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
