import { Theme } from "@react-navigation/native"

type ThemeAction = 
    | { type: 'DARK_THEME'}
    | { type: 'LIGHT_THEME'}

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    divider: string;
}

export const lightThme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    divider: 'rgba(0,0,0,0.7)',
    colors: {
        primary: '#084f6a',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dark: true,
    divider: 'rgba(255,255,255,0.7)',
    colors: {
        primary: '#75cedb',
        background: 'black',
        card: 'gray',
        text: 'white',
        border: 'gray',
        notification: 'teal',
    }
}

export const ThemeReducer = ( state: ThemeState, action : ThemeAction): ThemeState => {
    switch (action.type) {
        case 'LIGHT_THEME':
            return {
                ...lightThme
            }
        case 'DARK_THEME':
            return{
                ...darkTheme
            }
        default:
            return state;
    }
}