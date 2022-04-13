import React, { useContext, useState } from 'react';
import { Switch, Platform } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

const CustomSwitch = ( { isOn, onChange }: Props ) => {

    const { theme: { colors } } = useContext(ThemeContext)

    const [ isEnabled, setIsEnabled ] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled( !isEnabled );
        onChange(!isEnabled)
    }; 
    return(
        <>
            <Switch 
                trackColor={{false: "#d9d9db", true: colors.primary}}
                thumbColor={ Platform.OS === 'android' ? "purple" : 'gray' }
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </>
    )
}

export default CustomSwitch;