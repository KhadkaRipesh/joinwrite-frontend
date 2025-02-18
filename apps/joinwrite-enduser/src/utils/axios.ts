import axios from 'axios';
import { getItem } from './storage';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const configToUpdate = config;
    const token = getItem('token');

    if (token) {
      configToUpdate.headers.Authorization = `Bearer ${token}`;
    }

    if (configToUpdate.data instanceof FormData) {
      configToUpdate.headers['Content-Type'] = 'multipart/form-data';
    } else {
      configToUpdate.headers['Content-Type'] = 'application/json';
    }

    return configToUpdate;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
