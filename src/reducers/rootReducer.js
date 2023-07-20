// rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './authSlice';
import adminReducer from './adminSlice';
import alertReducer from './alertSlice'

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  alert: alertReducer,
});

export default rootReducer;