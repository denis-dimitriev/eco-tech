import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  headerTransform: false,
};

export const headerSlice = createSlice({
  name: "headerTransform",
  initialState,
  reducers: {
    setTransformHeader: (state, action: PayloadAction<boolean>) => ({
      headerTransform: action.payload,
    }),
  },
});

export const { setTransformHeader } = headerSlice.actions;
export default headerSlice.reducer;
