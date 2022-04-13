import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState } from 'react';
import { View, SafeAreaView, ImageSourcePropType, Text, Dimensions, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const { height, width } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

interface Props extends StackScreenProps<any, any>{}

const SlidesScreen = ( { navigation }: Props) => {

    const lastItem = items.length - 1;
    const { top } = useSafeAreaInsets();
    const [ idxItem, setitem ] = useState(0);
    const [ isLast, setIsLast ] = useState(false);
    const { fadeIn, opacity, fadeOut } = useAnimation();
    const { theme: {colors} } = useContext(ThemeContext);

    const renderItem = ( item: Slide) => {
        return(
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center'
                }}
            >
                <Image 
                    source={ item.img }
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'
                    }}
                />

                <Text style={styles.title}>{item.title}</Text>
                <Text style={{...styles.subTitle, color: colors.text}} >{item.desc}</Text>
            </View>
        )
    }

    return(
        <>
            <SafeAreaView
                style={{
                    marginTop: top,
                    flex: 1,
                }}
            >
                <Carousel
                    //ref={(c) => { this._carousel = c; }}
                    data={items}
                    renderItem={({item}) => renderItem(item) }
                    sliderWidth={width}
                    itemWidth={width}
                    layout='default'
                    onSnapToItem={(index) => {
                        setitem(index)
                        if( lastItem === index ){
                            setIsLast(true)
                            fadeIn()
                        }else {
                            setIsLast(false)
                            fadeOut()
                        }
                    }}
                />

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                        alignItems: 'center'
                    }}
                >
                    <Pagination 
                        dotsLength={items.length}
                        activeDotIndex={idxItem}
                        dotStyle={{
                            width: 15,
                            height: 5,
                            borderRadius: 3,
                            backgroundColor: "#5856d6"
                        }}
                    />

                    <Animated.View
                        style={{
                            opacity: opacity
                        }}
                    >
                        {
                            isLast && (
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'row',
                                        backgroundColor: colors.primary,
                                        width: 100,
                                        height: 30,
                                        borderRadius: 8,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    activeOpacity={0.7}
                                    onPress={ () => navigation.navigate('home')}
                                >
                                    <Text style={{
                                        color: colors.text
                                    }}>Continuar</Text>
                                    <Icon name='chevron-forward-outline' size={25} color="white" />
                                </TouchableOpacity>
                            )
                        }
                    </Animated.View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856d6'
    },
    subTitle: {
        fontSize: 16
    }
})

export default SlidesScreen;