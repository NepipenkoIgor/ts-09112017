import { axiosInstance } from '../config/axios.config';
import { AxiosPromise } from 'axios';

export const api: {
    getItems(key: string): AxiosPromise
} = {
        getItems(key: string): AxiosPromise {
            return axiosInstance().get(`participants?key=${key}`);
        }
    };