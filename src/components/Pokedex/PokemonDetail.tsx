import React, { useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPokemonAction } from "../../actions/pokeActions";
import { Pokemon } from "pokenode-ts";
import { Box, Card, CardContent, CardMedia, Chip, List, ListItem, Typography } from "@mui/material";
import ScaledBar from "../common/ScaledBar";

interface PokemonDetailProps extends RouteComponentProps {
    pokemon?: Pokemon;
};

const PokemonDetail = ({
    pokemon
}: PokemonDetailProps)  => {

    return (
        <>
            { pokemon && <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    alt={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    sx={{ height: 200, width: 200 }}
                    image={pokemon.sprites.other?.home.front_default ? pokemon.sprites.other?.home.front_default : ""}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            <span> #{ pokemon.id }</span>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <List>
                                <ListItem>Species: {pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1)}</ListItem>
                                <ListItem>Experience: {pokemon.base_experience}</ListItem>
                                <ListItem>Height: {pokemon.height} decimetres</ListItem>
                                <ListItem>Weight: {pokemon.weight} hectograms</ListItem>
                                <ListItem>Type: { pokemon.types.map((type) => {
                                        return (
                                            <Chip label={type.type.name} variant="outlined"/>
                                        );
                                    })}
                                </ListItem>
                                <ListItem>Abilities: { pokemon.abilities.map((ability) => {
                                        return (
                                            <Chip label={ability.ability.name} variant="outlined"/>
                                        );
                                    })}
                                </ListItem>
                            </List>
                        </Typography>
                    </CardContent>
                </Box>
                <Typography variant="body2" color="text.secondary">
                            <h4>Stats</h4>
                            { pokemon.stats.map((stat) => {
                                return (
                                    <ScaledBar
                                        name={stat.stat.name}
                                        value={stat.base_stat}
                                    />
                                );
                            })}
                        </Typography>
            </Card>}
        </> 
    );
};

export default PokemonDetail;