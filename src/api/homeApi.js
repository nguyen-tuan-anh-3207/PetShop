import axiosClient from './axiosClient';

const homeApi = {
  getProducts() {
    const url = '/products';

    return axiosClient.get(url);
  }
};

export default homeApi;
