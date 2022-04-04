import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showError } from '../../utils/error';
import homeApi from '../../api/homeApi';

const initialState = {
  products: null,
  error: null,
  isLoading: false
};

export const fetchProducts = createAsyncThunk(
  'home/fetchProduct',
  async (searchParams, { rejectWithValue }) => {
    try {
      const { data: response } = await homeApi.getProducts(searchParams);
      return response?.result?.products;
    } catch (err) {
      showError(err);
      return rejectWithValue(err.response);
    }
  }
);

const homeSlice = createSlice({
  name: 'home',
  initialState,
  extraReducers: (builder) => {
    builder
      // get products
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      });
  }
});

const { reducer } = homeSlice;
export default reducer;
