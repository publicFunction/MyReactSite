import {
  SET_LATEST_TWEET,
  GET_LATEST_TWEET,
} from './types';

export const setLatestTweet = tweet => ({
  type: SET_LATEST_TWEET,
  payload: tweet
});

export const getLatestTweet = () => ({
  type: GET_LATEST_TWEET
});
