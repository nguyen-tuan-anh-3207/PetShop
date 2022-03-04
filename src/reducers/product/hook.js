import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchProduct } from './api';

export const useGetProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product } = useSelector((state) => state.product);

  const onFetch = async () => {
    const resultAction = await dispatch(fetchProduct(id));

    if (!fetchProduct.fulfilled.match(resultAction)) {
      toast.error(resultAction.payload?.data?.message);
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  return [product];
};
