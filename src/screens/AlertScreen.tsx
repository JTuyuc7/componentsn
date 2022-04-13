import React, { useContext } from 'react';
import { Button, Text, View, Alert } from 'react-native';
import RenderListHeader from '../components/HeaderTitle';
import { styles } from '../theme/Apptheme';
import prompt from 'react-native-prompt-android';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const AlertScreen = () => {

    const { theme: { colors} } = useContext(ThemeContext)

    const showAlert = () => {
        Alert.alert(
            'Confirmation Alert',
            'Alert Opened',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel alert'),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => console.log('Confirm alert')
                }
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('alert dissmised')
            }
        )
    }

    const showPrompt = () => {
        prompt(
            'Enter password',
            'Please enter your password to continue',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel action'), style: 'cancel'},
                { text: 'Ok', onPress: () => console.log('Password confirmed')},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: '',
                placeholder: 'Enter password',
            }
        )
    }

    return(
        <>
            <>

                <RenderListHeader title='Alerts' />

                <View style={styles.globalMargin}>
                    <Button 
                        title='Show alert'
                        onPress={ () => showAlert() }
                        color={colors.primary}
                    />
                    <View style={{marginVertical: 10}} />
                    <Button 
                        title='Show Prompt'
                        onPress={ () => showPrompt() }
                        color={colors.primary}
                    />
                </View>
            </>
        </>
    )
}

export default AlertScreen;