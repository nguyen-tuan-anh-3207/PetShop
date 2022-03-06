import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchBlogs } from './api';

export const useGetBlogs = () => {
  const dispatch = useDispatch();

  const { blogs } = useSelector((state) => state.blog);

  const onFetch = async () => {
    const resultAction = await dispatch(fetchBlogs());

    if (!fetchBlogs.fulfilled.match(resultAction)) {
      toast.error(resultAction.payload?.data?.message);
    }
  };

  useEffect(() => {
    onFetch();
  }, []);

  return [blogs];
};
