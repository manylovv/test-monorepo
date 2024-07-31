import { useSessionTokenStore } from '@/state/auth';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_URL = '/';

const getSessionToken = () => {
  const token = useSessionTokenStore.getState().sessionToken;

  if (!token) {
    throw new Error('Session token is not set');
  }

  return token;
};

const api = {
  async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    console.log('making request', method, url, config);

    const response: AxiosResponse<T> = await axios.request({
      method,
      url: API_URL + url,
      ...config,
    });
    return response.data;
  },

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>('GET', url, config);
  },

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.request<T>('POST', url, { ...config, data });
  },

  async getWithToken<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const token = getSessionToken();

    return this.request<T>('GET', url, {
      ...config,
      headers: { 'App-Token': token },
    });
  },

  async postWithToken<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const token = getSessionToken();

    return this.request<T>('POST', url, {
      ...config,
      data,
      headers: { 'App-Token': token },
    });
  },
};

export const getUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    balance: 1500,
    name: 'Vanya',
    avatar: 'https://avatars.githubusercontent.com/u/101558535?v=4&size=64',
    tasks: [
      {
        id: '1',
        title: 'Complete the Tutorial',
        description: 'Get your first tokens!',
        reward: 300,
        disabled: false,
      },
      {
        id: '2',
        title: 'First P2P Operation',
        description: 'Trade Pier to Pier!',
        reward: 1000,
        disabled: true,
      },
      {
        id: '3',
        title: 'First P2P Operation',
        description: 'Trade Pier to Pier!',
        reward: 1500,
        disabled: true,
      },
    ],
  };
};

export const getToken = (initData: string) => {
  const config: AxiosRequestConfig = {
    headers: { 'Telegram-Data': initData },
  };

  return api.post<string>('/login', {}, config);
};
