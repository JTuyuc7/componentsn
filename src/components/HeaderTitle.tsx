import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/Apptheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    title: string;
}

const RenderListHeader = ( {title}: Props ) => {

    const { top } = useSafeAreaInsets();
    const { theme: { colors } } = useContext(ThemeContext)
    return(
        <View style={[styles.globalMargin, {marginBottom: 20, marginTop: top }]}>
            <Text style={{...styles.title, color: colors.text}}>{title}</Text>
        </View>
    )
};

export default RenderListHeader;