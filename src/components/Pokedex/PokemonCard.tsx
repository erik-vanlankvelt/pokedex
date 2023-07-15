import { Avatar, Card, CardHeader } from "@mui/material";
import { RouteComponentProps } from "@reach/router";
import { Pokemon } from "pokenode-ts";

interface PokemonCardProps extends RouteComponentProps {
    onClick: () => void;
    pokemon: Pokemon;
};

const PokemonCard = ({
    onClick,
    pokemon,
 }: PokemonCardProps)  => {

    return (
        <Card className="pokemon-card" onClick={onClick}>
            { pokemon && <>
                <CardHeader 
                    avatar={
                        <Avatar alt={ pokemon.name } sx={{ width: 56, height: 56 }}>
                            <img alt={ pokemon.name } src={ pokemon.sprites.front_default ? pokemon.sprites.front_default : "" } />
                        </Avatar>
                    }
                    title={ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }
                    subheader={`#${ pokemon.id }`}
                />
            </>}
        </Card> 
    );
};

export default PokemonCard;