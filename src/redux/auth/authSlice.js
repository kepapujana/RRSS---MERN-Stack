import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService'

const initialState = {
  user: null,
  token: null,
};

export const register = createAsyncThunk('auth/register', async (userData) => {
  try {
    return await authService.register(userData);
  } catch (error) {
    console.error('Error Message:', error.message);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
