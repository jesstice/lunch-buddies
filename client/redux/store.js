import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import combineReducers from './combine-reducers';


export default createStore(
  combineReducers,
  composeWithDevTools(
    applyMiddleware(
    thunk,
    logger
    )
  )
);