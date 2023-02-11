import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native';
import SearchInput from '../components/search/SearchInput';
import useSearchingPoke from '../hooks/useSearchingPoke';
import { styless } from '../theme/style';
import PokemonCart from '../components/carts/PokemonCart';
import LoadingIndicator from '../components/loadingIndicator/LoadingIndicator';
import { SinglePokemons } from '../interfaces/interfacePokemon';

const Search = () => {


    const { isSearching, searchPokemon } = useSearchingPoke();
    const [pokemonFilter, setPokemonFilter] = useState<SinglePokemons[]>([]);
    const [terms, setTerms] = useState('');

    const getFilterPokemons = () => {
        const searchId = parseInt(terms);
        if (!isNaN(searchId)) {
            const result = searchPokemon.find(({ id }) => parseInt(id) === searchId);
            setPokemonFilter(result ? [result] : []);

        } else {
            const result = searchPokemon.filter(({ name: pokemoName }) => {
                return pokemoName.includes(terms.toLowerCase());
            })
            setPokemonFilter(result);
        }

    }

    useEffect(() => {
        if (terms.length === 0) {
            return setPokemonFilter([]);
        }
        getFilterPokemons();
    }, [terms])




    if (isSearching) {
        return <LoadingIndicator />
    }
   

    return (
        <View style={{ flex: 1 }}>

            <SearchInput
                onDebounce={(value) => setTerms(value)}
            />

            <View style={{ alignItems: 'center' }}>
                <FlatList
                    data={pokemonFilter}
                    numColumns={2}
                    ListHeaderComponent={
                        <Text style={{
                            ...styles.headerTitle,
                        }}>
                            {terms}
                            {/* {searchPokemon.length} */}
                        </Text>
                    }
                    renderItem={({ item }) => <PokemonCart pokemons={item} />}
                    keyExtractor={(pokemon) => pokemon.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </View>
    )
}

export default Search;

const styles = StyleSheet.create({
    headerTitle: {
        top: 110,
        marginBottom: 110,
        paddingBottom: 10,
        ...styless.titleText,
        ...styless.globalMargin,

    }

})
