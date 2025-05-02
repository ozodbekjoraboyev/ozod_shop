import { ProduktType } from "@/type/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartProductType = ProduktType & { count: number };

export type CartState = {
  items: CartProductType[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProduktType>) => {
      const cartItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (cartItem) {
        cartItem.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    fullRemo: (state) => {
      state.items = [];
    },

    minusCount: (state, action: PayloadAction<number>) => {
      const minus = state.items.find((item) => item.id === action.payload);

      if (minus && minus.count > 1) {
        minus.count -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    plusCount: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.count += 1;
      }
    },
  },
});

export const { addToCart, removeCart, minusCount, plusCount, fullRemo } =
  cartSlice.actions;
export default cartSlice.reducer;
