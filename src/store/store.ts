import { configureStore } from "@reduxjs/toolkit";
import translationSlice from "../features/translation/translations.slice";
import headerSlice from "../features/header-slice";

export const store = configureStore({
  reducer: {
    translation: translationSlice,
    transform: headerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
