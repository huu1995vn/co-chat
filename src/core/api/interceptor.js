import axios from 'axios';
import LocalstoreService from "../services/localstore.service"
const TIMEOUT = 1 * 60 * 1000;
axios.defaults.timeout = TIMEOUT;

const setupAxiosInterceptors = () => {
    const onRequestSuccess = config => {
        const token = LocalstoreService.getToken();
        if (token && LocalstoreService.getToken()) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    };
    const onResponseSuccess = response => response;
    const onResponseError = err => {
        const status = err.status || (err.response ? err.response.status : 0);
        if (status === 403 || status === 401) {
            console.log("Token hết hạn");
            // onUnauthenticated();
        }
        return Promise.reject(err);
    };
    axios.interceptors.request.use(onRequestSuccess);
    axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;