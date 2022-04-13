import React, { useContext, useState } from 'react';
import { View, ScrollView, RefreshControl, Text } from 'react-native';
import RenderListHeader from '../components/HeaderTitle';
import { styles } from '../theme/Apptheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const PullToRefresh = () => {

    const [ refresh, setRefresh ] = useState(false);
    const [ data, setData ] = useState<string>();
    const { theme: { colors } } = useContext(ThemeContext)

    const getRefresh = () => {

        setRefresh(true);
        setTimeout(() => {
            console.log('Getting new data');
            setRefresh(false);

            setData('Nuevos datos obtenidos')
        }, 10000)
    }

    return(
        <>
            <ScrollView
                refreshControl={
                    <RefreshControl 
                        refreshing={refresh}
                        onRefresh={getRefresh}
                        progressViewOffset={50}
                        progressBackgroundColor="#5856d6"
                        colors={['white', 'red', 'green', 'blue', 'yellow']}
                    />
                }
            >
                <View style={styles.globalMargin}>
                    <RenderListHeader title='Pull to Refresh' />

                    <View>
                        <Text style={{ color: colors.text}}>{data}</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default PullToRefresh;