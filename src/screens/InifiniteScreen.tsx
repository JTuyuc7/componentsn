import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import RenderListHeader from '../components/HeaderTitle';
import FadeImage from '../components/FadeImage';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const InfiniteScreen = () => {

    const [ numbers, setNumbers ] = useState([0,1,2,3,4,5]);
    const { theme: {colors}} = useContext(ThemeContext);

    const loadMore = () => {
        const newArr: number[] = [];
        for(let i = 0; i < 5; i++){
            newArr[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArr])
        },1500)
    }

    const RenderItem = (item:any) => {

        const urlImg = `https://picsum.photos/id/${item}/500/300`;

        return(
            <FadeImage 
                url={urlImg} 
                style={{
                    width: '100%',
                    height: 400
                }}    
            />
        )

        {/* <>
                <View>
                    <Image 
                        source={{ uri: `https://picsum.photos/id/${item}/500/300`}}
                        style={{
                            width: '100%',
                            height: 400
                        }}
                    />
                </View>
        </> */}
    }
    return(

        <>
            <View>
                <FlatList 
                    data={numbers}
                    renderItem={ ({item}) => RenderItem(item)}
                    keyExtractor={ (item) => item.toString()}
                    ListHeaderComponent={() => <RenderListHeader title='Infinite Scroll' /> }
                    onEndReached={ () => loadMore()}
                    onEndReachedThreshold={ 0.5 }
                    ListFooterComponent={() => (
                        <View
                            style={{
                                height: 80,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <ActivityIndicator size={35} color={colors.primary} />
                        </View>
                    )}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    itemText: {
        backgroundColor: 'green',
        height: 100,
        color: 'white'
    }
})

export default InfiniteScreen;