import axiosClient from './axiosClient';

const blogApi = {
  getCategories() {
    const url = '/blogs';

    return axiosClient.get(url);
  }
};

export default blogApi;
