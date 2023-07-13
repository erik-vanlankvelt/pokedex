import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPokemonAction } from "../../actions/pokeActions";
import { Pokemon } from "pokenode-ts";

interface PokemonHomeProps extends RouteComponentProps {
    getPokemon?: typeof getPokemonAction;
    pokemon?: Pokemon;
};

// TODO make this configurable by browser and user
const language: string = 'en';

const PokemonHome = ({
    getPokemon,
    pokemon
}: PokemonHomeProps)  => {

    useEffect(() => {
        if (getPokemon) {
            getPokemon(3); // default to the first
        }
    }, []);

    return (
        <>
            { pokemon && <>
                <h3>
                    { pokemon.name }
                    <span>#{ pokemon.id }</span>
                </h3>
                {pokemon.sprites.front_default && <img src={pokemon.sprites.front_default} />}

                <div className="base-info">
                    <p>Species</p>
                    <p>{pokemon.species.name}</p>
                    <p>Base Experience</p>
                    <p>{pokemon.base_experience}</p>
                    <p>Height</p>
                    <p>{pokemon.height} decimetres</p>
                    <p>Weight</p>
                    <p>{pokemon.weight} hectograms</p>
                    <p>Abilities</p>
                    { pokemon.abilities.map((ability) => {
                        return (
                            <span>{ability.ability.name}</span>
                        );
                    })}
                </div>

                <h4>Type</h4>
                { pokemon.types.map((type) => {
                    return (
                        <p>{type.type.name}</p>
                    );
                })}

                <div className="stats">
                    <h4>Stats</h4>
                    { pokemon.stats.map((stat) => {
                        return (
                            <>
                                <p>{stat.stat.name}</p>
                                <p>{stat.base_stat}</p>
                            </>
                        );
                    })}
                </div>
            </>}
        </> 
    );
};

const mapStateToProps = (state: any) => {
    const {
        poke: { pokemon }
    } = state;

    return {
        pokemon
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPokemon: bindActionCreators(getPokemonAction, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonHome);