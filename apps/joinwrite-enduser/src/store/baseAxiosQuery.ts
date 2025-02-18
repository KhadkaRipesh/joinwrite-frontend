import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig } from 'axios';
import axiosInstance from '../utils/axios';
import errorMessageHandler from '../utils/errorMessageHandler';

interface CustomAxiosError {
  status: number;
  errorMessage: string;
}

const axiosBaseQuery = (): BaseQueryFn<{
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  headers?: AxiosRequestConfig['headers'];
}> => {
  return async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        headers,
      });

      return { data: result };
    } catch (axiosError) {
      const err = axiosError as CustomAxiosError;
      errorMessageHandler({ error: { ...err, isSuccess: false } });
      return {
        error: {
          status: err?.status,
          data: err?.errorMessage,
        },
      };
    }
  };
};

export default axiosBaseQuery;
