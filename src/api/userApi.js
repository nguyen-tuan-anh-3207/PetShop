import axiosClient from './axiosClient';

const userApi = {
  login(params) {
    const url = '/auth/login';

    return axiosClient.post(url, params);
  },

  register(params) {
    const url = '/auth/register';

    return axiosClient.post(url, params);
  }
};

export default userApi;
