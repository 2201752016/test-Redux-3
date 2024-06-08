import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    darkMode: false 
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.darkMode = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.darkMode = false;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

