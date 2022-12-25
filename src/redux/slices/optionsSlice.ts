import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface OptionsState {
  language: "en" | "es";
  volume: number;
}

const initialState: OptionsState = {
  language: "en",
  volume: 0.5,
};

export const optionsSlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setVolume: (state: any, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setLanguage: (state: any, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setVolume, setLanguage } = optionsSlice.actions;

export default optionsSlice.reducer;
