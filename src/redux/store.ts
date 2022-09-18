import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import optionsReducer from "./slices/optionsSlice";

export const store = configureStore({
  reducer: {
    options: optionsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
