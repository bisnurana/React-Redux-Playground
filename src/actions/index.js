import { FETCH_USERS } from './types';
import usersData from './mockData';
// api
export const fetchUsers = () => (dispatch) => {
  dispatch({ type: FETCH_USERS, payload: usersData });
};
