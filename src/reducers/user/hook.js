import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../../constants/message';
import { fetchLogin, fetchRegister } from './api';

export const useLogin = () => {
  const dispatch = useDispatch();
  const onFetch = async (data) => {
    const resultAction = await dispatch(fetchLogin(data));
    if (fetchLogin.fulfilled.match(resultAction)) {
      toast.success(LOGIN_SUCCESS);
    } else {
      toast.error(resultAction.payload?.data?.message);
    }
  };
  return [onFetch];
};

export const useRegister = () => {
  const dispatch = useDispatch();

  const onFetch = async (data) => {
    const resultAction = await dispatch(fetchRegister(data));
    const isSuccess = fetchRegister.fulfilled.match(resultAction);
    if (isSuccess) {
      toast.success(REGISTER_SUCCESS);
    } else {
      toast.error(resultAction.payload?.data?.message);
    }
  };
  return [onFetch];
};

// get state
export function useGetAuth() {
  return useSelector((state) => state.user);
}
