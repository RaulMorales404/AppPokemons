import React, { useEffect, useState, useRef } from 'react'
import { SinglePokemons } from '../../interfaces/interfacePokemon';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageColors from 'react-native-image-colors'
import { FadeInImage } from '../FadeInImage';
import { useNavigation } from '@react-navigation/native';


interface Props {
    pokemons: SinglePokemons;
}

const PokemonCart = ({ pokemons: pokemon }: Props) => {

    const navigation = useNavigation();
    const [cartColor, setCartColor] = useState("gray")
    const windowWidth = Dimensions.get('window').width;
    const isMounted = useRef(true);

   
    useEffect(() => {
        const imgColor = ImageColors.getColors(pokemon.picture, {
            fallback: 'gray',
        })

        imgColor.then((color) => {
            if (!isMounted.current) return;
            if (color.platform === 'android') {
                setCartColor(color.darkMuted || 'gray');
            } else if (color.platform === 'ios') {
                setCartColor(color.background || 'gray');
            }
        })
        return () => {
            isMounted.current = false;
        }

    }, [])


    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Pokemon' as never,
                    { singlePokemon: pokemon, color: cartColor } as never)
            }
            style={{ ...style.buttonImg }}
            activeOpacity={0.91}
        >
            <View

                style={{
                    ...style.cardContainer,
                    width: windowWidth * 0.4,
                    backgroundColor: cartColor,
                }}>

                <View>
                    <Text style={{ ...style.name }}>
                        {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}{'\n#' + pokemon.id}
                    </Text>
                </View>
                <View style={{ ...style.containerPokebola }}>
                    <Image style={{ ...style.imgPokebola }} source={require('./../../assets/pokebola-blanca.png')} />
                </View>
                <FadeInImage
                    uri={pokemon.picture}
                    style={{ ...style.imgPokemon }}
                />
            </View>
        </TouchableOpacity>
    )
}

export default PokemonCart;
const style = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'gray',
        marginHorizontal: 10,
        width: 120,
        height: 120,
        borderRadius: 18,
        marginBottom: 25,

        shadowColor: "#d0d0d0",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 9,


    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        top: 15,
        left: 15,
    },
    imgPokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -25,
        right: -25,
    },
    imgPokemon: {
        position: 'absolute',
        bottom: -5,
        right: -5,
        width: 100,
        height: 100,
    },
    containerPokebola: {
        width: 100,
        height: 100,
        bottom: 0,
        right: 0,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0.5,

    },
    buttonImg: {



    }
});