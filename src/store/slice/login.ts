import { createSlice } from "@reduxjs/toolkit";

type AuthSliceType = {
  accessToken?: string;
  user?: {
    id: number;
    name: string;

  };
};

const initialState: AuthSliceType = {
  accessToken:
    typeof window !== "undefined"
      ? localStorage.getItem("accessToken") || undefined
      : undefined,
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null") || undefined
      : undefined,
     
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
