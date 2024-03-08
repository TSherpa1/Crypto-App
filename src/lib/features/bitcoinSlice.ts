import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBitcoin = createAsyncThunk("getBitcoin", async () => {
  const { data } = await axios(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=180&interval=daily"
  );
  return data;
});

interface BitcoinState {
  data: {};
  status: "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: BitcoinState = {
  data: {},
  status: "pending",
  error: undefined,
};

export const bitcoinSlice = createSlice({
  name: "bitcoin",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBitcoin.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchBitcoin.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchBitcoin.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});

export default bitcoinSlice.reducer;
