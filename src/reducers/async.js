export default function (state = {}, action) {
  switch (action.type) {
    case 'ASYNC_START':
      return { ...state, [action.type]: true };
    case 'ASYNC_OVER':
      return { ...state, [action.type]: false };
    default:
      return state;
  }
}
