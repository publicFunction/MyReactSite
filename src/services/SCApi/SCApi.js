// import store from './../../store';

const success = (response) => {
    // store.dispatch('orgdata/org', response.data);
};
const failed = (error) => {
    return error.data;
};

export default () => {
    const headers = $http.defaults.headers.common;
    return $http.get(
        'http://sc-api.com/?api_source=live&system=organizations&action=single_organization&target_id=SKYCORPS&expedite=0&format=pretty_json',
    ).then((response) => {
        success(response.data);
    }).catch((error) => {
        failed(error);
    });
};