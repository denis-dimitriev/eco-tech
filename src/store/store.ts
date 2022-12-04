import { configureStore } from "@reduxjs/toolkit";
import translationSlice from "../features/translations.slice";
import headerSlice from "../features/header-slice";
import backdropSlice from "../features/backdrop";

export const store = configureStore({
  reducer: {
    translation: translationSlice,
    transform: headerSlice,
    backdrop: backdropSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
