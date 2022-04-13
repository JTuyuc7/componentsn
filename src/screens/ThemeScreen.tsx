import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import RenderListHeader from '../components/HeaderTitle';
//import { ThemeContext } from '../context/themeContext/themeContext';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {

    
    const { setDarkTheme, setLightTheme, theme: {colors} } = useContext(ThemeContext);
    //console.log(setDarkTheme, 'dark theme?-*-*-*-')

    return(
        <>
            <RenderListHeader title='Change Theme' />
            <View style={styles.container}>
                <TouchableOpacity 
                    style={{...styles.botonTheme, backgroundColor: colors.primary}}
                    activeOpacity={0.8}
                    onPress={setLightTheme}
                >
                    <Text style={styles.botonText}>Light</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{...styles.botonTheme, backgroundColor: colors.primary}}
                    activeOpacity={0.8}
                    onPress={setDarkTheme}
                >
                    <Text style={styles.botonText}>Dark</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    botonTheme: {
        backgroundColor: '#5856d6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 'auto',
        borderRadius: 10,
        paddingHorizontal: 30
    },
    botonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default ChangeThemeScreen;