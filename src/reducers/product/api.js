import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showError } from '../../utils/error';
import productApi from '../../api/productApi';

const initialState = {
  product: null,
  error: null,
  isLoading: false
};

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (id, { rejectWithValue }) => {
    try {
      const { data: response } = await productApi.getProduct(id);
      return response?.product;
    } catch (err) {
      showError(err);
      return rejectWithValue(err.response);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      // get products
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      });
  }
});

const { reducer } = productSlice;
export default reducer;
