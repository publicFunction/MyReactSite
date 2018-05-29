import initialState from './state';
import { LAST_ERROR } from './types';

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LAST_ERROR:
      return Object.assign(state.lastError, action.payload.response);
    default:
      return state;
  }
};
export default errorReducer;
