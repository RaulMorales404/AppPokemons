import React, { useEffect, useRef, useState } from 'react'
import { pokeApi } from '../api/pokeApi';
import { PokemonsPaginateResponse, Result, SinglePokemons } from '../interfaces/interfacePokemon';


const usePokePagination = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState<SinglePokemons[]>([]);
    const nextPageUrl = useRef("https://pokeapi.co/api/v2/pokemon?limit=40");
    const baseUrlPicture = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";


    const loadePokemons = async () => {
        setIsLoading(true);
        const { data } = await pokeApi.get<PokemonsPaginateResponse>(nextPageUrl.current);
        nextPageUrl.current = data.next;
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
        setPokemonList([...pokemonList, ...getNewPokemonList]);
        setIsLoading(false);
    }

    useEffect(() => {
        loadePokemons();
    }, [])

    return {
        isLoading,
        pokemonList,
        loadePokemons,
    };
}

export default usePokePagination;