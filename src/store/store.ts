import { configureStore } from "@reduxjs/toolkit";
import TranslationSlice from "../features/translations.slice";
import HeaderSlice from "../features/header.slice";
import BackdropSlice from "../features/backdrop.slice";
import AuthSlice from "../features/auth.slice";

export const store = configureStore({
  reducer: {
    translation: TranslationSlice,
    transform: HeaderSlice,
    backdrop: BackdropSlice,
    auth: AuthSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
