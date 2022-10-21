import React, {useState, useEffect, useContext, createContext} from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
    const [info, setInfo] = useState([]);
    const [heroBanner, setHeroBanner] = useState([]);
    const [promoBanner, setPromoBanner] = useState([]);
    const [categories, setCategories] = useState([]);

    // console.log('Conetxt Hero: ', heroBanner)
    return (
        <Context.Provider
            value={{
                setInfo,
                info,
                setHeroBanner,
                heroBanner,
                setCategories,
                categories,
                setPromoBanner,
                promoBanner
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
