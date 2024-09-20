import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

const userStorage = JSON.parse(localStorage.getItem('user'));
const tokenStorage = JSON.parse(localStorage.getItem('token'));

const initialState = {
  user: userStorage ? userStorage : null,
  token: tokenStorage ? tokenStorage : null,
};

export const register = createAsyncThunk('auth/register', async (userData) => {
  try {
    return await authService.register(userData);
  } catch (error) {
    console.error('Error Message:', error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (user) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
  },
});

export default authSlice.reducer;
