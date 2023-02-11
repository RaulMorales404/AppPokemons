import React, { useEffect, useState } from 'react'
import { DetailsPokemon } from '../interfaces/interfaceDeatilPokemon';
import { pokeApi } from '../api/pokeApi';

const useDetailPokemon = (id: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [detailPokemon, setDetailPokemon] = useState<DetailsPokemon>({} as DetailsPokemon);

    const getDetailPokemon = async () => {
        setIsLoading(true);
        const detailPokemon = await pokeApi.get<DetailsPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setDetailPokemon(detailPokemon.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getDetailPokemon();

        return () => {
            setIsLoading(false);
        }
    }, [])

    return {
        isLoading,
        detailPokemon
    }
}

export default useDetailPokemon;