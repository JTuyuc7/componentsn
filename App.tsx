import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';
//import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';

// Navegacion
import Navigation from './src/navigator/Navigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     // primary: string;
//     //background: "black",
//     // card: string;
//     //text: 'white',
//     // border: string;
//     // notification: string;
//   }
// }

const App = () => {

  return(
    <>
      <AppState>
        <Navigation />
      </AppState>
    </>
  )
}

const AppState = ({children}: any) => {

  return(
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;