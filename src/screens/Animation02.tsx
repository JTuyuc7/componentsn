import React, { useRef } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';
import RenderListHeader from '../components/HeaderTitle';

const Animation02 = () => {

    const pan = useRef( new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y
            },
        ], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan,
                { toValue: { x:0, y:0 }, useNativeDriver: false }
            ).start()
        }
    })

    return(
        <>
            <RenderListHeader title='Drag Animation' />
            <View style={styles.contaiener}>
                <Animated.View  
                    { ...panResponder.panHandlers }
                    style={[pan.getLayout(), styles.purpleBox]}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    contaiener:{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        borderRadius: 10
    },
    purpleBox:{
        backgroundColor: "#75cedb",
        height: 150,
        width: 150
    }
})

export default Animation02;