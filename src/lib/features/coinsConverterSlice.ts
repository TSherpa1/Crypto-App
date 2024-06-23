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
    setView: (state, action) => {
      state.currentView = action.payload;
    },
  },
});

export const { setView } = coinsConverterSlice.actions;
export default coinsConverterSlice.reducer;
