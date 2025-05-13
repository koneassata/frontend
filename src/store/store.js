// src/store/store.js

import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Pour utiliser Redux DevTools
);

export default store;
