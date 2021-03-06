import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchCategories } from './api';

export const useGetCategories = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);

  const onFetch = async () => {
    const resultAction = await dispatch(fetchCategories());

    if (!fetchCategories.fulfilled.match(resultAction)) {
      toast.error(resultAction.payload?.data?.message);
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  return [categories];
};
