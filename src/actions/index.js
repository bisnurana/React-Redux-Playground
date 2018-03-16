import { FETCH_USERS } from './types';
import usersData from './mockData';

export const fetchUsers = () => (dispatch) => {
  dispatch({ type: FETCH_USERS, payload: usersData });
};

