import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ORDER_SUCCESS } from '../../constants/message';
import { fetchCreateOrder } from './api';

export const useCreateOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreate = async (data) => {
    const resultAction = await dispatch(fetchCreateOrder(data));
    const isSuccess = fetchCreateOrder.fulfilled.match(resultAction);
    if (isSuccess) {
      toast.success(ORDER_SUCCESS);
      navigate('/');
    } else {
      toast.error(resultAction.payload?.data?.message);
    }
  };
  return [onCreate];
};
