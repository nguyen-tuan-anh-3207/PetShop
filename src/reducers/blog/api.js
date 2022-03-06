import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { showError } from '../../utils/error';
import blogApi from '../../api/blogApi';

const initialState = {
  blogs: null,
  error: null,
  isLoading: false
};

export const fetchBlogs = createAsyncThunk('blog/fetchBlogs', async (data, { rejectWithValue }) => {
  try {
    const { data: response } = await blogApi.getCategories();
    return response?.result?.blogs;
  } catch (err) {
    showError(err);
    return rejectWithValue(err.response);
  }
});

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  extraReducers: (builder) => {
    builder
      // get products
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      });
  }
});

const { reducer } = blogSlice;
export default reducer;
