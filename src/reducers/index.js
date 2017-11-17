import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import auth from './auth';
import error from './error';
import upload from './upload';

const rootReducer = combineReducers({
  auth,
  error,
  upload,
  routing: routerReducer
});

export default rootReducer;
