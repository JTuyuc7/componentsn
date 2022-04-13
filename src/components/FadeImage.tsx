import React, { useContext, useState } from 'react';
import { Animated, ActivityIndicator, View, StyleProp, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    url: string;
    style?: StyleProp<ImageStyle>; 
}

const FadeImage = ( {url, style}: Props ) => {

    const { opacity, fadeIn } = useAnimation();
    const [ isLoading, setIsLoading ] = useState(true);
    const { theme: {colors} } = useContext(ThemeContext);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn()
    }
    return(
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            {
                isLoading && 
                    <ActivityIndicator 
                        color={colors.primary}
                        size={35} 
                        style={{
                            position: 'absolute'
                        }}
                    />
            }
            <Animated.Image 
                source={{ uri: url }}
                onLoadEnd={ finishLoading }
                style={{
                    ...style as any,
                    opacity: opacity
                }}
            />
        </View>
    )
}

export default FadeImage;