import axios from 'axios';
import { NamedAPIResourceList, Pokemon } from 'pokenode-ts';

// TODO make dynamic per environment in app-config
export const POKE_API_BASE: string = 'https://pokeapi.co/api/v2';

export const getPokemonRequest = async (
    idOrName: number | string
): Promise<Pokemon> => {
    const url = `${POKE_API_BASE}/pokemon/${idOrName}`;

    const { data } = await axios.get(url);

    return data;
};

export const getPokemonListRequest = async (
    offset: number
): Promise<NamedAPIResourceList> => {
    const limit: number = 20;
    const url = `${POKE_API_BASE}/pokemon/?offset=${offset}&limit=${limit}`;

    const { data } = await axios.get(url);

    return data;
};
    