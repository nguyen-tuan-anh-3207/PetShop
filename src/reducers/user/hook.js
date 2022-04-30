import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS } from '../../constants/message';
import { fetchLogin, fetchRegister, fetchUpdateProfile, logout } from './api';

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

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    toast.success(LOGOUT_SUCCESS);

    navigate('/home');
  };
  return [onLogout];
};

export const useUpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onUpdateProfile = (data) => {
    dispatch(fetchUpdateProfile(data));
    toast.success('Cập nhật hồ sơ thành công');

    navigate('/home');
  };
  return [onUpdateProfile];
};

// get state
export function useGetAuth() {
  return useSelector((state) => state.user);
}
