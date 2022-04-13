import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {

    const opacity = useRef( new Animated.Value(0.3)).current;
    const position = useRef( new Animated.Value(-150)).current;

    const fadeIn = () => {
        Animated.timing(
            opacity,{
                toValue: 1,
                duration: 700,
                useNativeDriver: true
            }
        ).start();
    }

    const fadeOut = () => {
        Animated.timing(
            opacity,
            {
                toValue: 0.3,
                duration: 1500,
                useNativeDriver: true
            }
        ).start()
    }

    const startPosition = ( initialPosition: number, duration: number) => {
        position.setValue(initialPosition)
        Animated.timing(
            position,
            {
                toValue: 0,
                duration: duration,
                useNativeDriver: true,
                easing: Easing.bounce
            }   
        ).start()
    } 

    return{
        opacity,
        position,
        fadeIn,
        fadeOut,
        startPosition,
    }
}