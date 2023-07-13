import React, { lazy } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';

import { store } from './global/sagaStore';

const PokemonMain = lazy(() => import('./components/Pokedex'));

function App() {
  return (
    <Provider store={store}>
      <Router basepath='/'>
        <PokemonMain default />
      </Router>
    </Provider>
  );
}

export default App;
