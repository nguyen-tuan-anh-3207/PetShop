import axiosClient from './axiosClient';

const homeApi = {
  getProducts(params) {
    const url = '/products';

    return axiosClient.get(url, { params });
  }
};

export default homeApi;
