import React, { lazy } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';

import { store } from './global/sagaStore';

const PokedexHome = lazy(() => import('./components/Pokedex'));

function App() {
  return (
    <Provider store={store}>
      <Router basepath='/'>
        <PokedexHome default />
      </Router>
    </Provider>
  );
}

export default App;
