import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RO, RU } from "../../translations";
import { localeType } from "../types/general";

interface IState {
  language: typeof RO | typeof RU;
}

const initialState = { language: RU } as IState;

export const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {
    setLanguage: (state, { payload }: PayloadAction<localeType>) => {
      if (payload === "RO") {
        return { language: RO };
      }

      if (payload === "RU") {
        return { language: RU };
      }
    },
  },
});

export const { setLanguage } = translationSlice.actions;
export default translationSlice.reducer;
