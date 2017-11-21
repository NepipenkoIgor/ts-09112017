import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '../constants';

export const axiosInstance: () => AxiosInstance = () => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};