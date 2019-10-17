import { applyMiddleware, combineReducers, createStore } from 'redux';
import registrationReducer from './registration/reducer';
import { reducer as formReducer } from 'redux-form';
// import logger from 'redux-logger';

export default createStore(
  combineReducers({
    registration: registrationReducer,
    form: formReducer,
  }),
  applyMiddleware(/*logger*/),
);
