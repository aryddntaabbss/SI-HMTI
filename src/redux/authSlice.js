import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: sessionStorage.getItem('email') || null,
  id: sessionStorage.getItem('id') || null,
  token: sessionStorage.getItem('token') || null,
  username: sessionStorage.getItem('username') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.username = action.payload.username;

      sessionStorage.setItem('email', action.payload.email);
      sessionStorage.setItem('id', action.payload.id);
      sessionStorage.setItem('token', action.payload.token);
      sessionStorage.setItem('username', action.payload.username);
    },
    clearAuthData: (state) => {
      state.email = null;
      state.id = null;
      state.token = null;
      state.username = null;

      sessionStorage.removeItem('email');
      sessionStorage.removeItem('id');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('username');
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;

export const selectAuthData = (state) => state.auth;

export default authSlice.reducer;
