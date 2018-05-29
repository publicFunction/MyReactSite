import store from './../../store';
import { listOrganisations } from './../../store/organisations/actions';

const success = response => {
  store.dispatch(listOrganisations({ response }));
};

// When the request fails
const failed = error => {
  console.log(error);
};

export default () => {
  window.$http
    .get('/organisations')
    .then(response => {
      success(response.data);
    })
    .catch(error => {
      failed(error);
    });
};
