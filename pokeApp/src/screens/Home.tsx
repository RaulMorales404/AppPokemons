import React from 'react'
import { Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import { colors, styless } from '../theme/style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import usePokePagination from '../hooks/usePokePagination';
import PokemonCart from '../components/carts/PokemonCart';

const Home = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, pokemonList, loadePokemons } = usePokePagination();
    return (
        <>
            <Image style={styless.imgHome} source={require('./../assets/pokebola.png')} />
            <View style={{ alignItems: 'center' }}>
                <FlatList
                    ListHeaderComponent={
                        <Text style={{
                            ...styless.titleText,
                            ...styless.globalMargin,
                            top: top + 20,
                            marginBottom: top + 25,
                            paddingBottom: 10,
                        }}>
                            Pokedex
                        </Text>
                    }
                    data={pokemonList}
                    numColumns={2}
                    renderItem={({ item }) => <PokemonCart pokemons={item} />}
                    keyExtractor={(pokemon) => pokemon.id.toString()}
                    showsVerticalScrollIndicator={false}

                    //pagination
                    onEndReached={loadePokemons}
                    ///que tancercas del final
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={
                        <ActivityIndicator
                            style={{ height: 100 }}
                            color={colors.dark}
                            size={50}
                        />
                    }

                />
            </View>
        </>
    )
}

export default Home