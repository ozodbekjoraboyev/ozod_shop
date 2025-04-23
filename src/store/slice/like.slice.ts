import { ProduktType } from "@/type/Types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type likeState = {
  items: ProduktType[];
};

const initialState: likeState = {
  items: [],
};

const LikeSlice = createSlice({
  name: "Like",
  initialState, 
  reducers: {
    Like: (state, action: PayloadAction<ProduktType>) => {
      const likedId = state.items.find((item) => item.id === action.payload.id);
      if (likedId) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { Like } = LikeSlice.actions;
export default LikeSlice.reducer;
