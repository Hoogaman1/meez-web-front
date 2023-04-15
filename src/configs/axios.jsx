import axios from 'axios';
import toast from 'react-hot-toast';

const instance = axios.create({
    baseURL: `${process.env.PORT}://${process.env.URL}`
});

instance.interceptors.request.use(async config => {
    if (config.data) {
        for (const key of Object.keys(config.data)) {
            if (config.data[key] === '') {
                delete config.data[key];
            }
        }
    }

    if (typeof window !== 'undefined' && localStorage.getItem('userInfo') !== null) {
        config.headers.Authorization = `Token ${JSON.parse(localStorage.getItem('userInfo')).token}`;
    }

    return config;
});

instance.interceptors.response.use(
    res => {
        if (res.data.message && res.status === 200) {
            toast.success(res.data.message, { style: { zIndex: 2000 } });
        }
        return res;
    },
    error => {
        if (error?.response?.status === 401) {
            // localStorage.removeItem('userInfo');
            // window.location.href = '/login';
        } else {
            if (error?.response?.data?.message) {
                toast.error(error?.response?.data?.message, { style: { zIndex: 2000 } });
            }
        }
        return Promise.reject(error);
    }
);

export default instance;
