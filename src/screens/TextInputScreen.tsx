import React, { useContext, useState } from 'react';
import { Text, View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import RenderListHeader from '../components/HeaderTitle';
import { styles } from '../theme/Apptheme';
import CustomSwitch from '../components/CustomSwitch';
import { useForm } from '../hooks/useForm';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const TextInputScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext);

    const { form, onChange, } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    });

    return(
        <>
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView>
                    <TouchableWithoutFeedback
                        onPress={ () => Keyboard.dismiss() }
                    >
                        <View style={styles.globalMargin}>
                            <RenderListHeader title='Input Screen' />

                            <Text style={{...localStyles.textData, color: colors.text}}>{JSON.stringify( form, null, 5)}</Text>

                            <View style={localStyles.containerView}>
                                <Text>Nombre</Text>
                                <TextInput 
                                    placeholder='Ingresa tu nombre'
                                    keyboardType='default'
                                    autoCapitalize='words'
                                    style={{...localStyles.inpputStyle, borderColor: colors.primary, color: colors.text}}
                                    onChangeText={ (val) => onChange(val, 'name')}
                                    keyboardAppearance='dark'
                                    placeholderTextColor={colors.text}
                                />
                            </View>
                            <View>
                                <Text style={{ color: colors.text}}>Suscribirmer</Text>

                                <CustomSwitch isOn={form.isSubscribed} onChange={ (val) => onChange(val, 'isSubscribed') } />
                            </View>
                            <Text style={{...localStyles.textData, color: colors.text}}>{JSON.stringify( form, null, 5)}</Text>
                            <View style={localStyles.containerView}>
                                <Text style={{ color: colors.text}}>Email</Text>
                                <TextInput 
                                    placeholder='Ingresa tu email'
                                    keyboardType='email-address'
                                    style={{...localStyles.inpputStyle, borderColor: colors.primary, color: colors.text}}
                                    onChangeText={ (val) => onChange(val, 'email')}
                                    placeholderTextColor={colors.text}
                                />
                            </View>
                            <Text style={{...localStyles.textData, color: colors.text}}>{JSON.stringify( form, null, 5)}</Text>
                            <View style={localStyles.containerView}>
                                <Text style={{ color: colors.text}}>Phone</Text>
                                <TextInput 
                                    placeholder='Ingresa tu telefono'
                                    keyboardType='numeric'
                                    style={{...localStyles.inpputStyle, borderColor: colors.primary, color: colors.text}}
                                    onChangeText={ (val) => onChange(val, 'phone')}
                                    placeholderTextColor={colors.text}
                                />
                            </View>

                            <Text style={{...localStyles.textData, color: colors.text}}>{JSON.stringify( form, null, 5)}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    )
}

const localStyles = StyleSheet.create({
    inpputStyle: {
        borderWidth: 1,
        borderColor: "#e1e1e1",
        borderRadius: 10,
        paddingHorizontal: 10
    },
    textData: {
        fontSize: 23
    },
    containerView: {
        marginVertical: 10
    }
})

export default TextInputScreen;