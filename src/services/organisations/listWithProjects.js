import store from './../../store';
import { listOrganisationsWithProjects } from './../../store/organisations/actions';

const success = response => {
  store.dispatch(listOrganisationsWithProjects({ response }));
};

// When the request fails
const failed = error => {
  console.log(error);
};

export default () => {
  window.$http
    .get('/organisations?include=projects')
    .then(response => {
      success(response.data);
    })
    .catch(error => {
      failed(error);
    });
};
