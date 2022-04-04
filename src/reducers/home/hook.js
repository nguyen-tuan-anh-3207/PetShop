import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchProducts } from './api';

export const useGetProducts = (searchParams) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.home);

  const onFetch = async () => {
    const resultAction = await dispatch(fetchProducts(searchParams));

    if (!fetchProducts.fulfilled.match(resultAction)) {
      toast.error(resultAction.payload?.data?.message);
    }
  };

  useEffect(() => {
    onFetch();
  }, [searchParams]);

  return [products];
};
