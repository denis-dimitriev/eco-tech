import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  headerTransform: false,
};

export const HeaderSlice = createSlice({
  name: "headerTransform",
  initialState,
  reducers: {
    setTransformHeader: (state, action: PayloadAction<boolean>) => ({
      headerTransform: action.payload,
    }),
  },
});

export const { setTransformHeader } = HeaderSlice.actions;
export default HeaderSlice.reducer;
