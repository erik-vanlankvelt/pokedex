import axios from 'axios';
import { Pokemon } from 'pokenode-ts';

export const POKE_API_BASE: string = 'https://pokeapi.co/api/v2';

export const getPokemonRequest = async (idOrName: number | string): Promise<Pokemon> => {
    const url = `${POKE_API_BASE}/pokemon/${idOrName}`;

    const { data } = await axios.get(url);

    return data;
};
