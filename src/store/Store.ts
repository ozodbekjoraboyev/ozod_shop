import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slice/card.slice";
import LikeReduser from "./slice/like.slice";
import authSlice from "./slice/login";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    FavoriteCard: LikeReduser,
    authSlice: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
