import Axios from 'axios';
import store from './../../store';
import { getLatestTweet } from './../../store/twitter/actions';
import { lastError } from './../../store/error/actions';

const success = response => {
  store.dispatch(getLatestTweet({ response }));
};
const failed = error => {
  console.log(error);
  store.dispatch(lastError({ error }));
};

export default () => {
  const apiAuth =
  `oauth_consumer_key=${process.env.REACT_APP_TWITTER_CONSUMER_API_KEY},
  oauth_nonce=${process.env.REACT_APP_TWITTER_CONSUMER_API_SECRET},
  oauth_token=${process.env.REACT_APP_TWITTER_API_TOKEN}`;
  return Axios.get(`${process.env.REACT_APP_TWITTER_API}statuses/user_timeline.json?screen_name=${process.env.REACT_APP_TWITTER_API_USER}&count=1`,
    {
      headers: {
        'Accept': '*/*',
        'UserAgent': 'OAuth gem v0.4.4',
        'ContentType': 'application/x-www-form-urlencoded',
        'Authorization': `OAuth ${apiAuth}`
      },
    },
  ).then(response => {
    success(response.data);
    console.log(response.data);
  }).catch(error => {
    failed(error);
  });
};
