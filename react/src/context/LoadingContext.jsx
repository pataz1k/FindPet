import React, { createContext, useState } from "react";
export const LoadingContext = createContext();
import Loader from 'react-js-loader'
import classes from './LoadingContext.module.css'
export const LoadingProvider = ({ children }) => {

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
