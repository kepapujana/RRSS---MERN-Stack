import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postsService from './postsService';

const initialState = {
  posts: [],
  isLoading: false,
  post: [],
};

export const getPosts = createAsyncThunk('posts', async (user) => {
  try {
    return await postsService.getAll(user);
  } catch (error) {
    console.error(error);
  }
});

export const getById = createAsyncThunk('posts/getById', async (id) => {
  try {
    return await postsService.getById(id);
  } catch (error) {
    console.error(error);
  }
});

export const getPostsUsername = createAsyncThunk(
  'posts/username',
  async (username) => {
    try {
      return await postsService.getPostsUsername(username);
    } catch (error) {
      console.error(error);
    }
  }
);

export const getPostByName = createAsyncThunk(
  'posts/getPostByName',
  async (postName) => {
    try {
      return await postsService.getPostByName(postName);
    } catch (error) {
      console.error(error);
    }
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(getPostsUsername.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getPostByName.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});

export const { reset } = postsSlice.actions;

export default postsSlice.reducer;
