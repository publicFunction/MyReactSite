import initialState from './state';
import * as TWITCH from './types';

const twitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case TWITCH.SET_STREAM_STATUS:
      return {
        ...state,
        streamStatus: action.payload.response.data
      };
    case TWITCH.GET_STREAM_STATUS:
      return state.latest;
    case TWITCH.SET_STREAM_PROFILE:
      return {
        ...state,
        twitchProfile: (action.payload.response.data.length > 0) ? action.payload.response.data[0] : action.payload.response.data
      };
    default:
      return state;
  }
};
export default twitchReducer;
