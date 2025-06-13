import axios from 'axios';

import { use, useEffect } from 'react';
import { baseUrl } from '../Libs/Utility';
import { AuthContext } from '../Contex/AuthContex';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const UseAxiosSecure = () => {
  const { user } = use(AuthContext);

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(async (config) => {
      if (user) {
        const token = await user.getIdToken(); // Get Firebase ID token
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [user]);

  return axiosInstance;
};

export default UseAxiosSecure;