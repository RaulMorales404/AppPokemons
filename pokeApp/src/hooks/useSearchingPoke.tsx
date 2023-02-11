import React, { useEffect, useState } from 'react'
import { PokemonsPaginateResponse, Result, SinglePokemons } from '../interfaces/interfacePokemon';
import { pokeApi } from '../api/pokeApi';

const useSearchingPoke = () => {
    const [isSearching, setIsSearching] = useState(false);
    const [searchPokemon, setSearchPokemon] = useState<SinglePokemons[]>([]);
    //1154
    const url = "https://pokeapi.co/api/v2/pokemon?&limit=1154";
    const baseUrlPicture = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

    const loadePokemons = async () => {
        setIsSearching(true);
        const { data } = await pokeApi.get<PokemonsPaginateResponse>(url);
        createObjectPokemon(data.results);
    }
    const createObjectPokemon = (data: Result[]) => {
        const getNewPokemonList: SinglePokemons[] = data?.map(({ name, url }) => {
            const idPokemon = url.split('/')[6];
            const createUrlPicture = `${baseUrlPicture + idPokemon}.png`;
            return {
                id: idPokemon,
                name: name,
                picture: createUrlPicture,
            }
        });
        setSearchPokemon(getNewPokemonList);
        setIsSearching(false);
    }


    useEffect(() => {
        loadePokemons();

        return () => { }
    }, [])


    return {
        isSearching,
        searchPokemon,


    }
}

export default useSearchingPoke;