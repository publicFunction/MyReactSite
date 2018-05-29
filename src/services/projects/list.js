import Axios from 'axios';

const success = response => {
  console.log(response);
};

// When the request fails
const failed = error => {
  console.log(error);
};

export default () => {
  Axios.get('/projects')
    .then(response => {
      success(response.data);
    })
    .catch(error => {
      failed(error.response);
    });
};
