import { createSlice } from "@reduxjs/toolkit";

interface CoinsConverterState {
  currentView: "coins" | "converter";
}

const initialState: CoinsConverterState = {
  currentView: "coins",
};

export const coinsConverterSlice = createSlice({
  name: "CoinsConverter",
  initialState,
  reducers: {
    toggleView: (state) => {
      state.currentView =
        state.currentView === "converter" ? "coins" : "converter";
    },
  },
});

export const { toggleView } = coinsConverterSlice.actions;
export default coinsConverterSlice.reducer;
