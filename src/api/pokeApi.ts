import axios from 'axios';
import { Pokemon } from 'pokenode-ts';

// TODO make dynamic per environment in app-config
const API_BASE: string = 'https://pokeapi.co/api/v2';

export const getPokemonRequest = async (
    idOrName: number | string
): Promise<Pokemon> => {
    const url = `${API_BASE}/pokemon/${idOrName}`;

    const { data } = await axios.get(url);

    return data;
};
    