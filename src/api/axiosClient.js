import queryString from 'query-string';
import axios from 'axios';

const configHeader = {
  'Content-Type': 'application/json'
};

if (localStorage.getItem('accessToken')) {
  configHeader.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
}

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}` || 'http://localhost:8080/api',
  headers: configHeader,
  paramsSerializer: (params) => queryString.stringify(params)
});

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default axiosClient;
