import { itemsReducer, filterReducer } from './contacts/contacts-reducers';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducers = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());
