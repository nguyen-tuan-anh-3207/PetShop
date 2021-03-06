import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showError } from '../../utils/error';
import categoryApi from '../../api/categoryApi';

const initialState = {
  categories: null,
  error: null,
  isLoading: false
};

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async (data, { rejectWithValue }) => {
    try {
      const { data: response } = await categoryApi.getCategories();
      return response?.result?.categories;
    } catch (err) {
      showError(err);
      return rejectWithValue(err.response);
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: (builder) => {
    builder
      // get products
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      });
  }
});

const { reducer } = categorySlice;
export default reducer;
