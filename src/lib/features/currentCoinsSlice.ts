import { createSlice } from "@reduxjs/toolkit";

interface CurrentCoinsState {
  coins: string[];
}

const initialState: CurrentCoinsState = {
  coins: [],
};

export const currentCoinsSlice = createSlice({
  name: "currentCoins",
  initialState,
  reducers: {
    addCoin: (state, action) => {
      state.coins.push(action.payload);
    },
    removeCoin: (state, action) => {
      state.coins = state.coins.filter((coin) => coin !== action.payload);
    },
  },
});

export const { addCoin, removeCoin } = currentCoinsSlice.actions;
export default currentCoinsSlice.reducer;
