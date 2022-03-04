import axiosClient from './axiosClient';

const productApi = {
  getProduct(id) {
    const url = `/products/${id}`;

    return axiosClient.get(url);
  }
};

export default productApi;
