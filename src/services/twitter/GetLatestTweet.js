import Axios from 'axios';
import store from './../../store';
import { getLatestTweet } from './../../store/twitter/actions';
import { lastError } from './../../store/error/actions';

const success = response => {
  store.dispatch(getLatestTweet({ response }));
};
const failed = error => {
  store.dispatch(lastError({ error }));
};

export default () => {
  const apiAuth = btoa(`${process.env.REACT_APP_TWITTER_API_TOKEN}:${process.env.REACT_APP_TWITTER_API_TOKEN_SECRET}`);
  return Axios.get(`${process.env.REACT_APP_TWITTER_API}statuses/user_timeline.json?screen_name=${process.env.REACT_APP_TWITTER_API_USER}&count=1`,
    {
      headers: {
        Authorization: `Basic ${apiAuth}`,
      }
    },
  ).then(response => {
    success(response.data);
  }).catch(error => {
    failed(error);
  });
};
