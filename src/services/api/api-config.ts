import axios from 'axios';
import axiosRetry from 'axios-retry';

export const BASE_URL = 'https://armytodolist.com/';

export const todoListAxios = axios.create({
  baseURL: BASE_URL,
  validateStatus: (status: number) => status < 300,
  timeout: 10000,
});

axiosRetry(todoListAxios, {
  retries: 5,
  retryDelay: (retryCount: number) => {
    return 500 * Math.pow(2, retryCount - 1);
  },
});
