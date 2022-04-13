import React, { useContext } from 'react';
import { View, Button, StyleSheet, Animated } from 'react-native';
import RenderListHeader from '../components/HeaderTitle';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Animation01 = () => {

    const { fadeIn, fadeOut, opacity, position, startPosition } = useAnimation()
    const { theme: { colors } } = useContext(ThemeContext)
    
    return(
        <>
            <RenderListHeader title='Fade In - Out' />
            <View style={styles.container}>
                <Animated.View style={{
                    ...styles.purpleBox,
                    opacity: opacity,
                    transform: [{
                        translateY: position
                    }]
                }} />

                <Button 
                    title='Fade in Animation'
                    onPress={ () => {
                        fadeIn();
                        startPosition(-100, 700)
                    }}
                    color={colors.primary}
                />
                <Button 
                    title='Fade out animation'
                    onPress={fadeOut}
                    color={colors.primary}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox:{
        backgroundColor: "#5856d6",
        height: 150,
        width: 150,
        marginBottom: 10
    }
})

export default Animation01;