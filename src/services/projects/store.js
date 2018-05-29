import Axios from 'axios';

const success = response => {
  console.log(response);
};

const failed = error => {
  console.log(error);
};

export default project => {
  Axios.post('/projects', project)
    .then(response => {
      success(response.data);
    })
    .catch(error => {
      failed(error.response);
    });
};
