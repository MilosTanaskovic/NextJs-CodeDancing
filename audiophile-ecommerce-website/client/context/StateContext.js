import React, {useState, useEffect, useContext, createContext} from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
    const [info, setInfo] = useState([]);
    const [heroBanner, setHeroBanner] = useState([]);

    console.log('Conetxt Hero: ', heroBanner)
    return (
        <Context.Provider
            value={{
                setInfo,
                info,
                setHeroBanner,
                heroBanner
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
