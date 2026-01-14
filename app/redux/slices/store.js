import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./authenticationSlice";

const store = configureStore({
  reducer: {
    auth: authenticationSlice,
  },
  devTools: true,
});

export default store;
