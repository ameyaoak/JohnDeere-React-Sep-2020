import { createStore } from 'redux';
import rootMiddleware from '../middlewares';

import bugsReducer from '../reducers/bugsReducer';

const store = createStore(
  bugsReducer,
  rootMiddleware
);

export default store;