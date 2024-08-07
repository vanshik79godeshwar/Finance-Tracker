import axios from 'axios';


// https://finance-tracker-backend-dhar.onrender.com
//http://localhost:5000

const api = axios.create({
    baseURL: 'http://localhost:5000', // Apna backend server URL
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['x-auth-token'] = token;
        }
        return config; 
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default api;
