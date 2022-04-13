import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from "redux-thunk";
import { appValues } from './Reducers/appValues';
import { appPlaylists } from './Reducers/appPlaylists';
import { windowDisplay } from './Reducers/windowDisplay';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  appValues,
  appPlaylists,
  windowDisplay
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
