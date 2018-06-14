import Axios from 'axios';
import store from './../../store';
import { setSCPerson } from './../../store/scorganisation/actions';

const success = response => {
  store.dispatch(setSCPerson({ response }));
};
const failed = error => {
  return error.data;
};

export default () => {
  return Axios.get(
    '//sc-api.com/?api_source=live&system=accounts&action=full_profile&target_id=publicFunction&expedite=1&format=pretty_json'
  )
    .then(response => {
      success(response.data);
    })
    .catch(error => {
      failed(error);
    });
};
