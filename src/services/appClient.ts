import axiosInstance, {request} from '../axios';
import axios from 'axios';

export const login = async (payload: any) => {
  const data = await axiosInstance.post('/user/login', payload);
  return data;
};

export const showUser = async () => {
  const data = await axiosInstance.get('/user');
  return data;
};

export const getPods = () => {
  return request({url: '/pod/page/1/limit/100'});
};

export const podsNearMe = async (payload: PodsNearMePayload) => {
  const data = await axiosInstance.post('/pod/near_me', payload);
  return data;
};
