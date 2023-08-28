// authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  isLoggedOut: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  isLoggedOut:false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      state.isLoggedOut = false;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.isLoggedOut = true;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
