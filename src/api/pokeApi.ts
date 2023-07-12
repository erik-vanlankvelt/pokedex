import axios from 'axios';
import { Pokedex, PokemonClient } from 'pokenode-ts';

// TODO make dynamic per environment in app-config
const API_BASE: string = 'https://pokeapi.co/api/v2';

export const getPokedexesRequest = async (
    idOrName: number | string
): Promise<Pokedex> => {
    const url = `${API_BASE}/pokedex/${idOrName}`;

    const { data } = await axios.get(url);

    return data;
};
    