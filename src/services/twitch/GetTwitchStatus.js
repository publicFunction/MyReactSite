import Axios from 'axios';
import store from './../../store';
import { getLiveStatus } from './../../store/twitch/actions';
import { lastError } from './../../store/error/actions';

const success = response => {
  store.dispatch(getLiveStatus({ response }));
};
const failed = error => {
  console.log(error);
  store.dispatch(lastError({ error }));
};

export default () => {
  return Axios.get(`${process.env.REACT_APP_TWITCH_API}/streams?user_id=${process.env.REACT_APP_TWITCH_USER_ID}`,
    {
      headers: {
        'Client-ID': `${process.env.REACT_APP_TWITCH_CLIENT_ID}`
      },
    },
  ).then(response => {
    success(response.data);
  }).catch(error => {
    failed(error);
  });
};
