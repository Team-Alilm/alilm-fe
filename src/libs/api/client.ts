import { type ApiErrorScheme, errorMessage } from '@/libs/exceptions';
import ApiException from '@/libs/exceptions/api-exception';
import CustomException from '@/libs/exceptions/custom-exception';
import { LOCAL_STORAGE_KEY, Storage } from '@/libs/storage';
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://alilm.store/api/v1',
  timeout: 15000,
});

const interceptorRequestFulfilled = (config: InternalAxiosRequestConfig) => {
  if (typeof window === 'undefined') {
    return config;
  }
  const accessToken = Storage.getItem(LOCAL_STORAGE_KEY.accessToken);
  // Bearer
  if (!config.headers) {
    return config;
  }
  if (!accessToken) {
    return config;
  }

  config.headers.Authorization = `${accessToken}`;

  return config;
};

instance.interceptors.request.use(interceptorRequestFulfilled);

// Response interceptor
const interceptorResponseFulfilled = (res: AxiosResponse) => {
  if (200 <= res.status && res.status < 300) {
    return res.data;
  }

  return Promise.reject(res.data);
};

// Response interceptor
export const interceptorResponseRejected = (openLoginModal: () => void) => {
  return (error: AxiosError<ApiErrorScheme>) => {
    console.log('interceptorResponseRejected>>', error);

    //todo : 401 권환 헨들링을 임시로 했어요 리펙토링 필요해보여요!
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        // window.location.href = '/login';
        openLoginModal();
        Storage.deleteItem(LOCAL_STORAGE_KEY.accessToken);

        return Promise.reject(new CustomException(errorMessage.UNKNOWN_401, 'UNAUTHORIZED'));
      }

      return Promise.reject(new CustomException(errorMessage.UNKNOWN_401, 'NETWORK_ERROR'));
    }

    if (error.status === 409) {
      return Promise.reject(new CustomException(errorMessage.BAD_REQUEST_409, 'ERR_BAD_REQUEST'));
    }

    if (error.status === 400) {
      return Promise.reject(new CustomException(errorMessage.UNKNOWN_400, 'ERR_BAD_REQUEST'));
    }

    // if (error.response?.data?.['response_messages']) {
    //   return Promise.reject(new ApiException(error.response.data, error.response.status));
    // }

    if (error.response?.data) {
      const responseData =
        typeof error.response.data === 'string'
          ? { response_messages: error.response.data }
          : error.response.data;

      return Promise.reject(new ApiException(responseData, error.response.status));
    }

    if (error.message.startsWith('timeout')) {
      alert(errorMessage.TIMEOUT);

      return Promise.reject(new CustomException(errorMessage.TIMEOUT, 'NETWORK_TIMEOUT'));
    }

    return Promise.reject(new CustomException(errorMessage.UNKNOWN_400, 'NETWORK_ERROR'));
  };
};

export const setupInterceptors = (openLoginModal: () => void) => {
  instance.interceptors.response.use(
    interceptorResponseFulfilled,
    interceptorResponseRejected(openLoginModal)
  );
};

export { instance };

export const get = <T>(...args: Parameters<typeof instance.get>) => {
  const [url, config] = args;

  return instance.get<T, T>(url, {
    ...config,
    baseURL: url.includes('products?size')
      ? 'https://alilm.store/api/v2'
      : instance.defaults.baseURL,
  });
};
export const post = <T>(...args: Parameters<typeof instance.post>) => {
  const [url, data, config] = args;

  return instance.post<T, T>(url, data, {
    ...config,
    baseURL:
      url === '/baskets/registered' ? 'https://alilm.store/api/v2' : instance.defaults.baseURL,
  });
};

export const put = <T>(...args: Parameters<typeof instance.put>) => {
  return instance.put<T, T>(...args);
};

export const patch = <T>(...args: Parameters<typeof instance.patch>) => {
  return instance.patch<T, T>(...args);
};

export const del = <T>(...args: Parameters<typeof instance.delete>) => {
  return instance.delete<T, T>(...args);
};
