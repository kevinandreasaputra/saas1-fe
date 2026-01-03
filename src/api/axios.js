import axios from "axios";

const api = axios.create(
    {
        baseURL: "http://localhost:8000/api",
        headers: {
            "Content-Type": "application/json",
        }
    }
);

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    console.log('[Axios] Requesting:', config.url);
    console.log('[Axios] Token found:', token);
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('[Axios] Auth Header Set:', config.headers.Authorization);
    } else {
        console.warn('[Axios] No token found in localStorage!');
    }
    return config;
});

export default api;