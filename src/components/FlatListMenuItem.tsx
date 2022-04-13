import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { MenuItem } from '../interfaces/appInterface';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem
}

const FlatListMenuItem = ( { menuItem }: Props ) => {
    const navigation = useNavigation();
    const { theme: {colors} } = useContext(ThemeContext);
    return(
        <>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={ () => navigation.navigate(menuItem.component as any )}
            >
                <View style={styles.container}>
                    <View style={styles.container}>
                        <Icon name={menuItem.icon} size={20} color={colors.primary} />
                        <Text style={{...styles.itemText, color: colors.text}}>{menuItem.name}</Text>
                    </View>

                    <Icon name="chevron-forward-outline" size={30} color={colors.primary} />
                </View>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        marginLeft: 5,
        fontSize: 20,
        color: '#5856d6'
    }
})

export default FlatListMenuItem