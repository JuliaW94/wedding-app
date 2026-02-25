// Auth Slice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setLogout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthenticated, setLogout } = authSlice.actions;
export default authSlice.reducer;