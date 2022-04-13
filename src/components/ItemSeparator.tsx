import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    separator?: number;
}

const ItemSeparator = ( { separator = 5 }: Props) => {

    const { theme: { divider } } = useContext(ThemeContext);

    return(
        <View 
            style={{
                borderBottomWidth: 3,
                borderColor: divider,
                marginVertical: separator
            }}
        />
    )
}

export default ItemSeparator;