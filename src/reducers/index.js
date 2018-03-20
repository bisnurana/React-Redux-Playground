import { combineReducers } from 'redux';
import usersReducer from './users';
import uiStates from './ui';

export default combineReducers({
  users: usersReducer,
  ui: uiStates,
});

