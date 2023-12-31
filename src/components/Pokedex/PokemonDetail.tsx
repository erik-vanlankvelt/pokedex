import { RouteComponentProps } from '@reach/router';
import { Pokemon } from 'pokenode-ts';
import { Box, Card, CardContent, CardMedia, Chip, List, ListItem, Paper, Typography } from '@mui/material';
import ScaledBar from '../common/ScaledBar';
import { capitalizeAllWords, capitalizeFirstLetter, humanizeText } from '../../global/helperMethods';

export interface PokemonDetailProps extends RouteComponentProps {
    pokemon: Pokemon;
}

const PokemonDetail = ({ pokemon }: PokemonDetailProps) => {
    return (
        <Card className='pokemon-detail'>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia
                    component='img'
                    alt={capitalizeFirstLetter(pokemon.name)}
                    sx={{ height: 200, width: 200 }}
                    image={
                        pokemon.sprites.other?.['official-artwork'].front_default
                            ? pokemon.sprites.other?.['official-artwork'].front_default
                            : ''
                    }
                />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                            {capitalizeFirstLetter(pokemon.name)}
                            <span> #{pokemon.id}</span>
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            <List>
                                <ListItem key='species'>
                                    Species: {capitalizeFirstLetter(pokemon.species.name)}
                                </ListItem>
                                <ListItem key='experience'>Experience: {pokemon.base_experience}</ListItem>
                                <ListItem key='height'>Height: {pokemon.height} decimetres</ListItem>
                                <ListItem key='weight'>Weight: {pokemon.weight} hectograms</ListItem>
                            </List>
                        </Typography>
                    </CardContent>
                </Box>
            </Box>
            <Box>
                <CardContent>
                    <Typography variant='body2' color='text.secondary'>
                        <Paper sx={{ mb: 2, bgcolor: '#f2f2f2' }}>
                            <List>
                                <ListItem key='type'>
                                    Type:{' '}
                                    {pokemon.types.map((type) => {
                                        return (
                                            <Chip
                                                key={type.type.name}
                                                label={type.type.name}
                                                sx={{ m: 0.3 }}
                                                variant='outlined'
                                            />
                                        );
                                    })}
                                </ListItem>
                                <ListItem key='abilities'>
                                    Abilities:{' '}
                                    {pokemon.abilities.map((ability) => {
                                        return (
                                            <Chip
                                                key={ability.ability.name}
                                                label={ability.ability.name}
                                                sx={{ m: 0.3 }}
                                                variant='outlined'
                                            />
                                        );
                                    })}
                                </ListItem>
                            </List>
                        </Paper>

                        {pokemon.stats.map((stat) => {
                            return (
                                <ScaledBar
                                    name={capitalizeAllWords(humanizeText(stat.stat.name))}
                                    value={stat.base_stat}
                                />
                            );
                        })}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};

export default PokemonDetail;
