// import axios from 'axios';
// import toast from 'react-hot-toast';

// const instance = axios.create({
//     baseURL: process.env.URL
// });

// instance.interceptors.request.use(async config => {
//     if (config.data) {
//         for (const key of Object.keys(config.data)) {
//             if (config.data[key] === '') {
//                 delete config.data[key];
//             }
//         }
//     }

//     return config;
// });

// instance.interceptors.response.use(
//     res => {
//         if (res.data.message && res.status === 200) {
//             toast.success(res.data.message, { style: { zIndex: 2000 } });
//         }
//         return res;
//     },
//     error => {
//         if (error?.response?.status === 401) {
//             localStorage.removeItem('accessToken');
//         } else {
//             if (error?.response?.data?.message) {
//                 toast.error(error?.response?.data?.message, { style: { zIndex: 2000 } });
//             }
//         }
//         return Promise.reject(error);
//     }
// );

// export default instance;
