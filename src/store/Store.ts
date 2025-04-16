import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slice/card.slice";
import LikeReduser from "./slice/like.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    FavoriteCard: LikeReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
