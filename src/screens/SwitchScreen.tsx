import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RenderListHeader from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const SwitchScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext);
    const [ toggleState, setToggleState ] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });

    const { isActive, isHappy, isHungry } = toggleState;

    const onChange = (value:boolean, field: string) => {
        setToggleState({
            ...toggleState,
            [field]: value
        })
    }

    return(
        <>
            <View style={{ marginTop: 25, marginHorizontal: 15}}>        
                <RenderListHeader title='Opciones de switch' />       
                
                <View style={styles.switchContainer}>
                    <Text style={{color: colors.text}}>isActive</Text>
                    <CustomSwitch isOn={isActive} onChange={ (value) => onChange(value, 'isActive')} />
                </View>

                <View style={styles.switchContainer}>
                    <Text style={{color: colors.text}}>isHungry</Text>
                    <CustomSwitch isOn={isHungry} onChange={ (value) => onChange(value, 'isHungry')} />
                </View>
                <View style={styles.switchContainer}>
                    <Text style={{color: colors.text}}>isHappy</Text>
                    <CustomSwitch isOn={isHappy} onChange={ (value) => onChange(value, 'isHappy')} />
                </View>

                <Text
                    style={{...styles.switchText, color: colors.text}}
                >
                    {JSON.stringify( toggleState, null, 5)}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    switchContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25
    }
})

export default SwitchScreen;