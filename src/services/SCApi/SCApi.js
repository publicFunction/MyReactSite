import Axios from 'axios';
import store from './../../store';
import { setSCOrganisation } from './../../store/scorganisation/actions';

const success = response => {
  store.dispatch(setSCOrganisation({ response }));
};
const failed = error => {
  return error.data;
};

export default () => {
  return Axios.get(
    '//sc-api.com/?api_source=cached&system=organizations&action=single_organization&target_id=SKYCORPS&expedite=0&format=pretty_json'
  )
    .then(response => {
      success(response.data);
    })
    .catch(error => {
      failed(error);
    });
};
