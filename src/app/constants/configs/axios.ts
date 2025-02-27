// utils/axios.js
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',  // Substitua pela URL da sua API
  headers: {
    'Content-Type': 'application/json',
  }
});

// Interceptor para adicionar o token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
