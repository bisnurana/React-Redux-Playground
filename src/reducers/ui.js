import { FETCHING, FETCHED, ERROR } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCHING:
      return true;
    case FETCHED:
      return true;
    case ERROR:
      return action.payload;
    default:
      return state;
  }
}
