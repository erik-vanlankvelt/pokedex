import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPokemonAction, resetPokemonDataAction } from '../../actions/pokeActions';
import { NamedAPIResource, NamedAPIResourceList, Pokemon } from 'pokenode-ts';
import PokemonCard from './PokemonCard';
import { AppBar, Button, Chip, Container, Grid, Stack, TextField, Toolbar } from '@mui/material';
import { POKE_API_BASE } from '../../api/pokeApi';
import axios from 'axios';
import {
    AppBarStyles,
    ContainerStyles,
    MainPageStyles,
    SearchBarStyles,
    ToolbarStyles
} from '../../constants/pokeStyles';
import PokemonDetail from './PokemonDetail';
const logoUrl = require(`../../images/pokedex-logo.png`);

export interface PokemonMainProps extends RouteComponentProps {
    getPokemon: typeof getPokemonAction;
    pokemonData: Pokemon[];
    resetPokemonData: typeof resetPokemonDataAction;
}

const PokemonMain = ({ getPokemon, pokemonData, resetPokemonData }: PokemonMainProps) => {
    const [displayPokemonDetails, setDisplayPokemonDetails] = useState<boolean>(false);
    const [pokemonDetails, setPokemonDetails] = useState<Pokemon>();
    const [pokemonInput, setPokemonInput] = useState<string>(''); // Value in search input
    const [searchHistory, setSearchHistory] = useState<string[]>([]); // Saved previous searches

    const pokemonSearchHistory: string = 'POKEMON_SEARCH_HISTORY'; // Key in Local Storage

    useEffect(() => {
        // Preventing memory leaks and React 18 double invocation
        const abortController = new AbortController();
        // TODO would move to cookies, so user doesn't have to manually delete
        const storedSearchHistory: string | null = window.localStorage.getItem(pokemonSearchHistory);

        if (storedSearchHistory !== null) {
            setSearchHistory(JSON.parse(storedSearchHistory));
        }
        getDefaultPokemonData(abortController.signal);

        return () => abortController.abort();
    }, []);

    useEffect(() => {
        // TODO would move to cookies, so user doesn't have to manually delete
        if (searchHistory && searchHistory.length > 0) {
            window.localStorage.setItem(pokemonSearchHistory, JSON.stringify(searchHistory));
        }
    }, [searchHistory]);

    const selectPokemon = (pokemon: Pokemon) => {
        setPokemonDetails(pokemon);
        setDisplayPokemonDetails(true);
    };

    const getDefaultPokemonData = async (signal?: AbortSignal) => {
        resetPokemonData();
        setDisplayPokemonDetails(false);

        try {
            const resp = await axios.get(`${POKE_API_BASE}/pokemon/`, { signal: signal });
            const pokemonResourceList: NamedAPIResourceList = resp.data;

            getPokemonDataWithResources(pokemonResourceList.results);
        } catch (error) {
            console.error('Error getting Pokemon Resource List', error);
            // TODO display error message/state
        }
    };

    const getPokemonDataWithResources = (results: NamedAPIResource[]) => {
        results.map((result: NamedAPIResource) => {
            getPokemon(result.name);
        });
    };

    const searchForPokemon = (input?: string) => {
        resetPokemonData();
        setDisplayPokemonDetails(false);

        // Handles passed in value if pokemonInput state hasn't updated
        if (input && input.length > 0) {
            getPokemon(input);
        } else if (pokemonInput && pokemonInput.length > 0) {
            // We don't want to duplicate values
            if (!searchHistory.includes(pokemonInput)) {
                setSearchHistory([...searchHistory, pokemonInput.toLocaleLowerCase()]);
            }
            getPokemon(pokemonInput.toLocaleLowerCase());
        } else {
            // If empty, get the default data
            getDefaultPokemonData();
        }
    };

    const selectPreviousSearch = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault(); // we don't want to navigate
        const target = event.target as HTMLElement;
        const savedPokemonInput: string = target.innerText;

        if (savedPokemonInput) {
            setPokemonInput(savedPokemonInput);
            searchForPokemon(savedPokemonInput);
        }
    };

    return (
        <Container className='pokemon-main' maxWidth='lg' style={ContainerStyles}>
            <AppBar style={AppBarStyles} position='static'>
                <Toolbar style={ToolbarStyles}>
                    <img alt='Pokédex Logo' height={'56px'} src={logoUrl} />
                </Toolbar>
            </AppBar>
            <Grid container spacing={3} style={MainPageStyles}>
                <Grid item xs={5}>
                    {pokemonData && (
                        <div className='pokemon-list'>
                            <Stack direction='row' spacing={1} style={SearchBarStyles}>
                                <TextField
                                    className='pokemon-main__search-input'
                                    label='Enter Pokémon Name or ID'
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setPokemonInput(event.target.value);
                                    }}
                                    onKeyPress={(ev) => {
                                        if (ev.key === 'Enter') {
                                            searchForPokemon();
                                            ev.preventDefault();
                                        }
                                    }}
                                    size='small'
                                    type='search'
                                    value={pokemonInput && pokemonInput.length > 0 ? pokemonInput : ''}
                                />
                                <Button
                                    className='pokemon-main__search-button'
                                    onClick={() => {
                                        searchForPokemon();
                                    }}
                                    size='medium'
                                    variant='contained'
                                >
                                    Search
                                </Button>
                            </Stack>
                            <Grid
                                className='pokemon-list__cards'
                                container
                                spacing={{ xs: 2, md: 3 }}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                                {pokemonData
                                    .sort((a, b) => a.id - b.id)
                                    .map((pokemon: Pokemon, i: number) => {
                                        return (
                                            <Grid item xs={4} sm={4} md={4} key={pokemon.name}>
                                                <PokemonCard
                                                    key={`${pokemon.name}_${i}`}
                                                    onClick={() => selectPokemon(pokemon)}
                                                    pokemon={pokemon}
                                                />
                                            </Grid>
                                        );
                                    })}
                            </Grid>
                        </div>
                    )}
                </Grid>
                <Grid item xs={2}>
                    <h3 className='pokemon-search-history__heading'>Search History</h3>
                    {searchHistory && searchHistory.length > 0 && (
                        <div className='pokemon-search-history'>
                            <Stack direction='column-reverse' spacing={1}>
                                {searchHistory.map((searchItem: string) => {
                                    return (
                                        <Chip
                                            clickable
                                            component='a'
                                            href='#'
                                            key={searchItem}
                                            label={searchItem}
                                            onClick={(event: React.MouseEvent<HTMLElement>) =>
                                                selectPreviousSearch(event)
                                            }
                                            aria-label='use search history'
                                            className='pokemon-search-history__item'
                                        />
                                    );
                                })}
                            </Stack>
                        </div>
                    )}
                </Grid>
                <Grid item xs={5}>
                    {displayPokemonDetails && pokemonDetails && <PokemonDetail pokemon={pokemonDetails} />}
                </Grid>
            </Grid>
        </Container>
    );
};

const mapStateToProps = (state: any) => {
    const {
        poke: { pokemonData }
    } = state;

    return {
        pokemonData
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPokemon: bindActionCreators(getPokemonAction, dispatch),
        resetPokemonData: bindActionCreators(resetPokemonDataAction, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonMain);
