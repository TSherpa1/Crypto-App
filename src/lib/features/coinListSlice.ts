import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCoinList = createAsyncThunk("getCoins", async () => {
  const { data } = await axios(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
  );
  return data;
});

interface CoinListState {
  data: [];
  status: "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: CoinListState = {
  data: [],
  status: "pending",
  error: undefined,
};

export const coinListSlice = createSlice({
  name: "coinList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCoinList.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchCoinList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchCoinList.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});

export default coinListSlice.reducer;
