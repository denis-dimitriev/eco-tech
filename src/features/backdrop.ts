import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    setBackdrop: (state, action: PayloadAction<boolean>) => ({
      isOpen: action.payload,
    }),
  },
});

export const { setBackdrop } = backdropSlice.actions;
export default backdropSlice.reducer;
