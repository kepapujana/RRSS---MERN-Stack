import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import postsService from './postsService';

const initialState = {
  posts: [],
  isLoading: false,
  post: {},
  // postsUser: {},
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

// export const getPostByName = createAsyncThunk(
//   'posts/username',
//   async (user) => {
//     try {
//       return await postsService.getPostByName(user);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );

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
      });
    // .addCase(getPostByName.fulfilled, (state, action) => {
    //   state.postsUser = action.payload;
    // });
  },
});

export const { reset } = postsSlice.actions;

export default postsSlice.reducer;
