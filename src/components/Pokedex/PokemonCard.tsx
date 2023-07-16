import { Avatar, Card, CardContent, Link, Theme } from '@mui/material';
import { RouteComponentProps } from '@reach/router';
import { Pokemon } from 'pokenode-ts';
import { capitalizeFirstLetter } from '../../global/helperMethods';

export interface PokemonCardProps extends RouteComponentProps {
    onClick: () => void;
    pokemon: Pokemon;
}

const PokemonCard = ({ onClick, pokemon }: PokemonCardProps) => {
    return (
        <Link aria-label='view pokemon details' className='pokemon-card' href='#' onClick={onClick} underline='none'>
            <Card sx={{ textAlign: 'center' }}>
                <CardContent>
                    <Avatar
                        alt={pokemon.name}
                        className='pokemon-card__avatar'
                        src={pokemon.sprites.front_default ? pokemon.sprites.front_default : ''}
                        sx={{
                            height: '60px',
                            margin: 'auto',
                            width: '60px'
                        }}
                    />
                    <h3
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            letterSpacing: '0.5px',
                            marginTop: 8,
                            marginBottom: 0
                        }}
                    >
                        {capitalizeFirstLetter(pokemon.name)}
                    </h3>
                    <span
                        style={{
                            fontSize: 14
                        }}
                    >{`#${pokemon.id}`}</span>
                </CardContent>
            </Card>
        </Link>
    );
};

export default PokemonCard;
