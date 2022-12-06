import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Initial {
  isRegistered: boolean;
}

const initialState: Initial = {
  isRegistered: true,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsRegistered: (state, action: PayloadAction<boolean>) => ({
      isRegistered: action.payload,
    }),
  },
});

export const { setIsRegistered } = AuthSlice.actions;
export default AuthSlice.reducer;
