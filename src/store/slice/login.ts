import { createSlice } from "@reduxjs/toolkit";

type AuthSlikeTyope = {
  accessToken?: string;
  users?: {
    id: number;
    name: string;
  };
};

const initialState: AuthSlikeTyope = {
  accessToken: undefined,
};

const authState = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    userLogin: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.users = payload.user;
    },
  },
});

export const { userLogin } = authState.actions;

export default authState.reducer;
