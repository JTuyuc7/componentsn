import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import HomeScreen from '../screens/HomeScreen';
import Animation01 from '../screens/Animation01';
import Animation02 from '../screens/Animation02';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefresh from '../screens/PulltoRefresh';
import SectionListScreen from '../screens/SectionList';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScreen from '../screens/InifiniteScreen';
import SlidesScreen from '../screens/SlidesScreen';
import ChangeThemeScreen from '../screens/ThemeScreen';

const Stack = createStackNavigator();

const Navigation = () => {

    const { theme,  } = useContext(ThemeContext);

    return(
        <NavigationContainer
            theme={theme}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                    cardStyle: {
                        //backgroundColor: 'white'
                    }
                }}
            >
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="Animation01" component={Animation01} />
                <Stack.Screen name="Animation02" component={Animation02} />
                <Stack.Screen name='SwitchScreen' component={SwitchScreen} />
                <Stack.Screen name='AlertScreen' component={AlertScreen} />
                <Stack.Screen name='InputScreen' component={TextInputScreen} />
                <Stack.Screen name='PullToRefresh' component={PullToRefresh} />
                <Stack.Screen name='SectionList' component={SectionListScreen} />
                <Stack.Screen name='ModalScreen' component={ModalScreen} />
                <Stack.Screen name='InfiniteScreen' component={InfiniteScreen} />
                <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
                <Stack.Screen name="ChangeTheme" component={ChangeThemeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
// ig_naome_ornelas08