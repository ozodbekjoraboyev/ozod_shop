import { createSlice } from "@reduxjs/toolkit";

type AuthSliceType = {
  accessToken?: string;
  user?: {
    id: number;
    name: string;
  };
};

function isServerSide() {
  return typeof window === "undefined";
}

const authLocalString = isServerSide()
  ? undefined
  : localStorage.getItem("auth");

const initialState: AuthSliceType = authLocalString
  ? JSON.parse(authLocalString)
  : {};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      localStorage.setItem("auth", JSON.stringify(payload));

      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
    logout: (state) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth"); 
      }
      state.accessToken = "";
      state.user = undefined;
    },
    

  },
  
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
