import axios from 'axios';

export function get(url, params) {
    axios.defaults.withCredentials = true;
    return axios({
        method: 'get',
        url,
        params,
        withCredentials: true,
        crossDomain: true,
    }).then(resp => resp.data);
}

export function post(url, data, params) {
    axios.defaults.withCredentials = true;
    return axios({
        method: 'post',
        url,
        data,
        params,
        withCredentials: true,
        crossDomain: true,
    });
}
