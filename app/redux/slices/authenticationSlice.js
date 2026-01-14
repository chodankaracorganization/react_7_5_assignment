import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "role",
  initialState: { name: "Guest", isLoggedIn: false },
  reducers: {
    login: (state) => {
      state.name = "User";
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.name = "Guest";
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
