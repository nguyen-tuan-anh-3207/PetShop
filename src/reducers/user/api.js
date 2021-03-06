import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showError } from '../../utils/error';
import userApi from '../../api/userApi';

const initialState = {
  token: '',
  user: null,
  error: null,
  isLoading: false
};

export const fetchLogin = createAsyncThunk('user/login', async (data, { rejectWithValue }) => {
  try {
    const { data: response } = await userApi.login(data);
    return response;
  } catch (err) {
    showError(err);
    return rejectWithValue(err.response);
  }
});

export const fetchUpdateProfile = createAsyncThunk(
  'user/update',
  async (data, { rejectWithValue }) => {
    try {
      const { data: response } = await userApi.updateProfile(data);
      return response;
    } catch (err) {
      showError(err);
      return rejectWithValue(err.response);
    }
  }
);

export const fetchRegister = createAsyncThunk(
  'user/register',
  async (data, { rejectWithValue }) => {
    try {
      const { data: response } = await userApi.register(data);
      return response;
    } catch (err) {
      showError(err);
      return rejectWithValue(err.response);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem('accessToken');
    }
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        localStorage.setItem('accessToken', action.payload.accessToken);
      })

      // register
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        localStorage.setItem('accessToken', action.payload.accessToken);
      })
      .addCase(fetchUpdateProfile.fulfilled, (state, action) => {
        state.user = {
          ...state.user,
          phoneNumber: action.payload.profile.phoneNumber,
          address: action.payload.profile.address
        };
      });
  }
});

const { reducer } = userSlice;
export const { logout } = userSlice.actions;
export default reducer;
