import {
  SET_STREAM_STATUS,
  GET_STREAM_STATUS,
  SET_STREAM_PROFILE,
  GET_STREAM_PROFILE,
} from './types';

export const setLiveStatus = status => ({
  type: SET_STREAM_STATUS,
  payload: status
});

export const getLiveStatus = () => ({
  type: GET_STREAM_STATUS
});

export const setTwitchProfile = profile => ({
  type: SET_STREAM_PROFILE,
  payload: profile
});

export const getTwitchProfile = () => ({
  type: GET_STREAM_PROFILE
});