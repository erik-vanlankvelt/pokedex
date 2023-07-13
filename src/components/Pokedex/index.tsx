import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPokemonAction, resetPokemonDataAction } from "../../actions/pokeActions";
import { NamedAPIResource, NamedAPIResourceList, Pokemon } from "pokenode-ts";
import PokemonCard from "./PokemonCard";
import { Button, IconButton, InputBase, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { POKE_API_BASE } from "../../api/pokeApi";
import axios from "axios";

interface PokemonMainProps extends RouteComponentProps {
    getPokemon: typeof getPokemonAction;
    pokemonData: Pokemon[];
    resetPokemonData: typeof resetPokemonDataAction;
};

const PokemonMain = ({
    getPokemon,
    pokemonData,
    resetPokemonData
}: PokemonMainProps)  => {
    const [pokemonInput, setPokemonInput] = useState<string>('');

    useEffect(() => {
        getDefaultPokemonData();
    }, []);

    const getDefaultPokemonData = async () => {
        resetPokemonData();
        const { data } = await axios.get(`${POKE_API_BASE}/pokemon/`);

        getPokemonDataWithResources(data);
    };

    const getPokemonDataWithResources = (data: NamedAPIResourceList) => {
        data.results.map((result) => {
            getPokemon(result.name);
        });
    };

    const searchForPokemon = async () => {
        resetPokemonData();
        
        if (pokemonInput && pokemonInput.length) {
            getPokemon(pokemonInput);
        } else {
            // TODO display error message/state
        }
    };

    return (
        <div className="pokemon-main">
            <div className="pokemon-main__search">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField 
                        className="pokemon-main__search-input" 
                        label="Enter Pokémon name or ID" 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setPokemonInput(event.target.value); }}
                        onKeyPress={(ev) => {
                            if (ev.key === 'Enter') {
                                searchForPokemon()
                                ev.preventDefault();
                            }
                        }}
                        size="small" 
                        type="search" 
                    />
                    <Button onClick={() => { searchForPokemon() }} size="large" variant="outlined">Search</Button>
                </Box>
                

            </div>
            
            { pokemonData && <div className="pokemon-list">

                <div className="pokemon-list__cards">
                    { pokemonData.map((pokemon: Pokemon) => {
                        return (
                            <PokemonCard key={pokemon.name} pokemon={pokemon} />
                        );
                    })}
                </div>
            </div>}
        </div> 
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