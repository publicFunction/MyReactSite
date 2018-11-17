import initialState from './state';
import * as TWEET from './types';

const twitterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TWEET.SET_LATEST_TWEET:
      return {
        ...state,
        latest: action.payload.response.data
      };
    case TWEET.GET_LATEST_TWEET:
      return state.latest;
    default:
      return state;
  }
};
export default twitterReducer;
