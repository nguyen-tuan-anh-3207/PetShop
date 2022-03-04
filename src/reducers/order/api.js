import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showError } from '../../utils/error';

import orderApi from '../../api/orderApi';

const initialState = {
  order: '',
  error: null,
  isLoading: false
};

export const fetchCreateOrder = createAsyncThunk(
  'order/create',
  async (data, { rejectWithValue }) => {
    try {
      const { data: response } = await orderApi.createOrder(data);
      console.log('response...', response);
      return response;
    } catch (err) {
      showError(err);
      return rejectWithValue(err.response);
    }
  }
);

const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: (builder) => {
    builder
      // login
      .addCase(fetchCreateOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
      });
  }
});

const { reducer } = orderSlice;
export default reducer;
