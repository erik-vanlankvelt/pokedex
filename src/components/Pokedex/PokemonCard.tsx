import { Avatar, Card, CardContent, CardHeader, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { RouteComponentProps } from '@reach/router';
import { Pokemon } from 'pokenode-ts';
import { capitalizeFirstLetter } from '../../global/helperMethods';

export interface PokemonCardProps extends RouteComponentProps {
    onClick: () => void;
    pokemon: Pokemon;
}

const useStyles = makeStyles((theme: Theme) => ({
    avatar: {
        width: 60,
        height: 60,
        margin: 'auto'
    },
    card: {
        textAlign: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        marginTop: 8,
        marginBottom: 0
    },
    subheader: {
        fontSize: 14
    }
}));

const PokemonCard = ({ onClick, pokemon }: PokemonCardProps) => {
    const styles = useStyles();

    return (
        <Card className={`${styles.card} pokemon-card`} onClick={onClick} aria-label='view pokemon details'>
            <CardContent>
                <Avatar
                    alt={pokemon.name}
                    className={`${styles.avatar} pokemon-card__avatar`}
                    src={pokemon.sprites.front_default ? pokemon.sprites.front_default : ''}
                />
                <h3 className={styles.heading}>{capitalizeFirstLetter(pokemon.name)}</h3>
                <span className={styles.subheader}>{`#${pokemon.id}`}</span>
            </CardContent>
        </Card>
    );
};

export default PokemonCard;
