import { Avatar } from "@mui/material";
import { RouteComponentProps } from "@reach/router";
import { Pokemon } from "pokenode-ts";

interface PokemonCardProps extends RouteComponentProps {
    key: string;
    pokemon: Pokemon;
};

const PokemonCard = ({ 
    key,
    pokemon,
 }: PokemonCardProps)  => {

    return (
        <div className="pokemon-card" key={key}>
            { pokemon && <>
                {pokemon.sprites.front_default && <Avatar alt={ pokemon.name } src={ pokemon.sprites.front_default } sx={{ width: 56, height: 56 }} />}
                <span>#{ pokemon.id }</span>
                <h3 className="pokemon-card__name">{ pokemon.name }</h3>
            </>}
        </div> 
    );
};

export default PokemonCard;