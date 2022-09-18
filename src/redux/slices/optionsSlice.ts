import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface OptionsState {
  language: "en" | "es";
  volume: number;
}

const initialState: OptionsState = {
  language: "en",
  volume: 0,
};

export const optionsSlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
  },
});

export const { setVolume } = optionsSlice.actions;

export default optionsSlice.reducer;
