import React, { createContext, useEffect, useReducer } from 'react';
import { useColorScheme, AppState, Appearance } from 'react-native';
import { ThemeReducer, ThemeState, lightThme, darkTheme } from './ThemeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({children}: any) => {

    //const colorSchema = useColorScheme();

    const [ theme, dispatch ] = useReducer(ThemeReducer, ( Appearance.getColorScheme() === 'dark' ) ? darkTheme : lightThme )

    // useEffect(() => {  ------------------ Solo para Ios
    //     (colorSchema === 'light') 
    //         ? setLightTheme()
    //         : setDarkTheme()
    // },[])

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if(status === 'active'){
                (Appearance.getColorScheme() === 'light')
                    ? setLightTheme()
                    : setDarkTheme()                
            }
        })
    },[])

    const setDarkTheme = () => {
        dispatch({ type: 'DARK_THEME'})
    }   
    
    const setLightTheme = () => {
        dispatch({ type: 'LIGHT_THEME'})
    }

    return(
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme
            }}
        >

            {children}
        </ThemeContext.Provider>
    )
}