import axios from 'axios';

const authTokens = (key: any) => {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse stored json or if none return null
    return item ? JSON.parse(item) : null;
  } catch (error) {
    // If error also return null
    console.log(error);
    return null;
  }
};

const axiosInstance = axios.create({
  baseURL: 'https://pluto.borne.io/api',
  headers: {
    Authorization: `Bearer ${authTokens('token')}`,
    Accept: '*/*',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export const request = async ({...options}) => {
  const onSuccess = (response: any) => response;
  const onError = (error: any) => {
    // optionaly catch errors and add additional logging here
    return error;
  };

  return await axiosInstance(options).then(onSuccess);
};

export default axiosInstance;
