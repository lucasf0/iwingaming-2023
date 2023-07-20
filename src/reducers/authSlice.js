// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  asdkfjasdkljfklas: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.asdkfjasdkljfklas = true;
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.asdkfjasdkljfklas = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
