import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { DetailsPokemon, Sprites, Species, Move } from '../../interfaces/interfaceDeatilPokemon';
import { ScrollView } from 'react-native-gesture-handler';
import { FadeInImage } from '../FadeInImage';

interface Props {
    detailsPokemon: DetailsPokemon
}
const PokemonDetails = ({ detailsPokemon }: Props) => {


    return (
        <ScrollView style={{ ...StyleSheet.absoluteFillObject }}
            showsVerticalScrollIndicator={false}
        >
            <View style={{ ...styles.container, marginBottom: 50 }}>
                {/* types */}
                <Text style={{ ...styles.typesTitle }}>types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {detailsPokemon.types.map(({ type }) => (
                        <Text style={{ ...styles.typesSubTitle }} key={type.name}>{type.name}</Text>
                    ))}
                </View>
                {/* Peso */}

                <Text style={{ ...styles.typesTitle, marginTop: 20 }}>Weight</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ ...styles.typesSubTitle }}> {detailsPokemon.weight} Kg</Text>
                </View>
                {/* Sprites */}
                <Text style={{ ...styles.typesTitle, marginTop: 20 }}>Sprits</Text>
                <View style={{ flexDirection: 'row' }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <FadeInImage
                            uri={detailsPokemon.sprites.front_default}
                            style={{ ...styles.basiSprite }}
                        />
                        <FadeInImage
                            uri={detailsPokemon.sprites.back_default}
                            style={{ ...styles.basiSprite }}
                        />
                        <FadeInImage
                            uri={detailsPokemon.sprites.front_shiny}
                            style={{ ...styles.basiSprite }}
                        />
                        <FadeInImage
                            uri={detailsPokemon.sprites.back_shiny}
                            style={{ ...styles.basiSprite }}
                        />
                    </ScrollView>
                </View>

                {/* types */}
                <Text style={{ ...styles.typesTitle }}>Abilities beise</Text>
                <View style={{ flexDirection: 'row' }}>
                    {detailsPokemon.abilities.map(({ ability }, index) => (
                        <Text style={{ ...styles.typesSubTitle }} key={index + ability.name}>
                            {ability.name}
                        </Text>
                    ))}
                </View>

                {/* types */}
                <Text style={{ ...styles.typesTitle, marginTop: 20 }}>Moves</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {detailsPokemon.moves.map(({ move }, index) => (
                        <View style={{ ...styles.containerTextMove }} key={index + move.name}>
                            <Text style={{ ...styles.move }} >
                                {move.name}
                            </Text>
                        </View>
                    ))}
                </View>

                {/* stats */}
                <Text style={{ ...styles.typesTitle, marginTop: 20 }}>States</Text>
                <View>
                    {detailsPokemon.stats.map((item, index) => (
                        <View style={{ ...styles.containerStat }} key={index + item.stat.name}>
                            <Text style={{ ...styles.typesSubTitle, }} >
                                {item.stat.name}
                            </Text>
                            <Text style={{ ...styles.typesSubTitle, fontWeight: '600' }}>
                                {item.base_stat}
                            </Text>
                        </View>

                    ))}
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <FadeInImage
                        uri={detailsPokemon.sprites.front_default}
                        style={{ ...styles.basiSprite, top: 10, marginBottom: 50 }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default PokemonDetails;

const styles = StyleSheet.create({
    container: {
        marginTop: 321,
        marginHorizontal: 20,
    },
    typesTitle: {
        color: '#000',
        fontSize: 22,
        fontWeight: '600',
    },
    typesSubTitle: {
        fontSize: 18,
        color: '#000',
        marginTop: 5,
        marginRight: 10,
    },
    basiSprite: {
        width: 100,
        height: 100,
    },
    abilityImg: {
        width: 100,
        height: 100,
    },
    containerTextMove: {
        backgroundColor: '#e2e2e2',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 13,

    },
    move: {
        fontSize: 18,
        fontWeight: '400',
        color: '#000',

    },
    containerStat: {
        width: '60%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

})