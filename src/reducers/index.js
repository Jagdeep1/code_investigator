import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import auth from './auth';
import error from './error';
import upload from './upload';
import getTsLintSummary from './fetchData';

const rootReducer = combineReducers({
  auth,
  error,
  upload,
  getTsLintSummary,
  routing: routerReducer
});

export default rootReducer;
