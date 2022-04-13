import React, { useContext, useState } from 'react';
import { View, Button, Modal, Pressable, Alert, Text } from 'react-native';
import RenderListHeader from '../components/HeaderTitle';
import { styles } from '../theme/Apptheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ModalScreen = () => {

    const [ isVisible, setIsVisible ] = useState(false);
    const { theme: { colors } } = useContext(ThemeContext);

    const openModal = () => {
        setIsVisible(true)
    }

    return(
        <>
            <RenderListHeader title='Modal Screen' />
            <View style={styles.globalMargin}>
                <Button 
                    title='Open Modal'
                    onPress={ () => openModal()}
                    color={colors.primary}
                />

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={isVisible}
                    onRequestClose={ () => {
                        Alert.alert( 'Modal has been closed');
                        setIsVisible(!isVisible)
                    }}
                    
                >
                    <View
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: colors.card,
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '90%',
                                borderRadius: 10,
                                paddingVertical: 15,
                                shadowOffset: {
                                    width: 0,
                                    height: 10
                                },
                                shadowOpacity: 0.25,
                                elevation: 10
                            }}
                        >
                            <RenderListHeader title='Modal Abierto' />
                            <Text style={{ color: colors.text}}>Inside the modal</Text>
                            <Button 
                                title='Close'
                                onPress={ () => setIsVisible(false) }
                                color={colors.primary}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default ModalScreen;