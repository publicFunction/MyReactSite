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
  const apiAuth = btoa(`${process.env.REACT_APP_TWITTER_CONSUMER_API_KEY}:${process.env.REACT_APP_TWITTER_CONSUMER_API_SECRET}`);
  return Axios.post(`${process.env.REACT_APP_TWITTER_API}oauth2/token`,
    {
      headers: {
        Accept: '*/*',
        Authorization: `Basic ${apiAuth}`,
      }
    },
    {
      'grant_type': 'client_credentials',
    },
  ).then(response => {
    success(response.data);
  }).catch(error => {
    console.log(apiAuth);
    failed(error);
  });
};
