import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/basketSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});