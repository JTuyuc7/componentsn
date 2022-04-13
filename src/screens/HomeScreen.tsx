import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../theme/Apptheme';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menutItems';
import RenderListHeader from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

const HomeScreen = () => {

    return(
        <>
            <View style={{ ...styles.globalMargin }}>
                <FlatList 
                    data={menuItems}
                    /* renderItem={ ({item}) => FlatListMenuItem(item) } */
                    renderItem={({item}) => (
                        <FlatListMenuItem menuItem={item} />
                    )}
                    keyExtractor={ (item) => item.id.toString()}
                    ListHeaderComponent={ () => <RenderListHeader title="Opciones de Menu" /> }
                    ItemSeparatorComponent={() => <ItemSeparator separator={10} /> }
                />
            </View>
        </>
    )
}

export default HomeScreen;