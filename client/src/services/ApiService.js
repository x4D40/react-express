import axios from "axios";

// if not production, call the api server instead of the webserver
// in production the webserver will be the same as the api server
function proxy(route) {
    if(process.env.NODE_ENV !== 'production') {
        return `http://localhost:5000${route}`;
    }

    return route;
}

// only take body, headers, and status from response, others aren't commonly used
function mapResponse(response) {
    const {data, headers, status} = response;
    return ({ data, headers, status})
}

function _get(route, config = null) {
    return axios.get(proxy(route), config).then(res => mapResponse(res));
}

function _post(route, config = null) {
    return axios.post(proxy(route), config).then(res => res);
}

function _put(route, config = null) {
    return axios.put(proxy(route), config).then(res => res);
}

function _delete(route, config = null) {
    return axios.delete(proxy(route), config);
}

export {
    _get as get,
    _post as post,
    _put as put,
    _delete as delete
}
