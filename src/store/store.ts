import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers/combineReducer.reducer';

const middleWare = [thunk];

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(...middleWare)),
);
