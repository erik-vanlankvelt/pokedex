import { getPokemonAction, storePokemonDataAction } from '../actions/pokeActions';
import * as pokeApi from '../api/pokeApi';
import { mockPokemon } from '../constants/tests/Pokemon';
import { recordSaga } from '../global/jestHelpers';
import { getPokemonSaga } from './pokeSagas';

describe('getPokemonSaga', () => {
    it('should make a getPokemonRequest + update state', async () => {
        jest.spyOn(pokeApi, 'getPokemonRequest').mockResolvedValue(mockPokemon);
        const idOrName: string | number = 1;
        const triggerAction = getPokemonAction(idOrName);
        const dispatched = await recordSaga(getPokemonSaga, triggerAction);

        const expectedActions = [storePokemonDataAction(mockPokemon)];

        expect(pokeApi.getPokemonRequest).toHaveBeenCalledWith(idOrName);
        expect(dispatched).toEqual(expectedActions);
    });
});
