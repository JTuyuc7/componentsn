import React, { useContext } from 'react';
import { Text, View, SectionList } from 'react-native';
import RenderListHeader from '../components/HeaderTitle';
import { styles } from '../theme/Apptheme';
import ItemSeparator from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
    }
];

const SectionListScreen = () => {

    const { theme: {colors} } = useContext(ThemeContext);

    return(
        <>
            <View style={{...styles.globalMargin, flex: 1}}>
                <SectionList 
                    sections={casas}
                    renderItem={ ({item}) => <Text style={{color: colors.text}}>{item}</Text>}
                    ListHeaderComponent={ () => <RenderListHeader title='Section List' />}
                    ListFooterComponent={ () => <RenderListHeader title={`Total de elementos ${casas.length}`} />}
                    renderSectionFooter={ ({section}) => (
                        <RenderListHeader title={`Total ${section.data.length}`} />
                    ) }
                    stickySectionHeadersEnabled={true}
                    keyExtractor={ (item, index) => item + index }
                    renderSectionHeader={ ({ section: { casa }}) => (
                        <View >
                            <RenderListHeader title={casa} />
                        </View>
                    ) }
                    /* SectionSeparatorComponent={ () => <ItemSeparator /> } */
                    ItemSeparatorComponent={ () => <ItemSeparator separator={10} />}
                />
            </View>
        </>
    )
}

export default SectionListScreen;