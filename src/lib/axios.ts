import axios, { Axios } from 'axios';

let axiosInstance: Axios;

export const HttpClient = () => {
  if (axiosInstance) return axiosInstance;
  
  axiosInstance = axios.create({
    baseURL: 'https://run.mocky.io/v3',
  });

  return axiosInstance
}