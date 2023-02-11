import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, Platform, Image, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigation/NavigationTab2';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import useDetailPokemon from '../hooks/useDetailPokemon';
import PokemonDetails from '../components/pokemon/PokemonDetails';


interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> { };

const Pokemon = ({ navigation, route }: Props) => {
    const dimantionsTop = useSafeAreaInsets().top;
    const sistema = Platform.OS;
    const { singlePokemon: { id, name, picture }, color } = route.params;
    const idPokemon = parseInt(id);
    const { isLoading, detailPokemon } = useDetailPokemon(idPokemon);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ ...styles.headerContainer, backgroundColor: color }}>
                <View
                    style={{
                        ...styles.containerTitle,
                        top: sistema === 'ios' ? dimantionsTop : 40,
                    }}>
                    <TouchableOpacity
                        style={{ ...styles.buttonGoBack, }}
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.5}
                    >
                        <Icon name="chevron-back-outline" size={30} color="#fff" />
                    </TouchableOpacity>
                    <View style={{ ...styles.containerName }}>
                        <Text style={{ ...styles.name }}>
                            {name[0].toUpperCase() + name.substring(1) + '\n#'} {id}
                        </Text>
                    </View>
                </View>
                <Image source={require('./../assets/pokebola-blanca.png')}
                    style={{ ...styles.imgPokebola }}
                />
                <FadeInImage
                    uri={picture}
                    style={{
                        ...styles.imgPokemon,
                        width: sistema === 'android' ? 220 : 200,
                        height: sistema === 'android' ? 220 : 200,
                        right: sistema === 'android' ? 20 : 10,
                    }}
                />
            </View>

            {isLoading
                ? <ActivityIndicator style={{ flex: 1 }} size={50} color={color} />
                : <PokemonDetails detailsPokemon={detailPokemon} />
            }


        </View>

    )
}

export default Pokemon;
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "red",
        height: 320,
        zIndex: 999,
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
    },
    buttonGoBack: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        width: 50,
        height: 55,
        marginHorizontal: 10,
        position: 'absolute',
        zIndex: 1000,
    },
    containerTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerName: {
        width: '100%',
    },
    name: {
        fontSize: 40,
        fontWeight: '300',
        alignSelf: 'center',
        color: '#fff',
    },
    imgPokebola: {
        width: 175,
        height: 175,
        alignSelf: 'center',

        opacity: 0.5,
        position: 'absolute',
        bottom: 0
    },
    imgPokemon: {
        width: 200,
        height: 200,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-end',
    },
    detailsContainer: {
        position: 'relative',
        backgroundColor: 'red',
        alignItems: 'center',
        width: 200,
        height: 900,
        flex: 1,

    }
})