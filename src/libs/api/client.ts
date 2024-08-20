import { type ApiErrorScheme, errorMessage } from '@/libs/exceptions';
import ApiException from '@/libs/exceptions/api-exception';
import CustomException from '@/libs/exceptions/custom-exception';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://alilm.store',
  timeout: 15000,
});

function interceptorRequestFulfilled(config: InternalAxiosRequestConfig) {
  if (typeof window === 'undefined') {
    return config;
  }
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);
  if (!config.headers) {
    return config;
  }
  if (!accessToken) {
    return config;
  }

  config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
}

instance.interceptors.request.use(interceptorRequestFulfilled);

// Response interceptor
function interceptorResponseFulfilled(res: AxiosResponse) {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  }

  return Promise.reject(res.data);
}

// Response interceptor
function interceptorResponseRejected(error: AxiosError<ApiErrorScheme>) {
  if (error.response?.data?.['response_messages']) {
    return Promise.reject(new ApiException(error.response.data, error.response.status));
  }

  if (error.message.startsWith('timeout')) {
    return Promise.reject(new CustomException(errorMessage.TIMEOUT, 'NETWORK_TIMEOUT'));
  }

  return Promise.reject(new CustomException(errorMessage.UNKNOWN_400, 'NETWORK_ERROR'));
}

instance.interceptors.response.use(interceptorResponseFulfilled, interceptorResponseRejected);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}

export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T, T>(...args);
}

export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T, T>(...args);
}

export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T, T>(...args);
}

export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T, T>(...args);
}
