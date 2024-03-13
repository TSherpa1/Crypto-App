import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMarketData = createAsyncThunk("getMarketData", async () => {
  const { data } = await axios("https://api.coingecko.com/api/v3/global");
  return data;
});

interface MarketDataState {
  data: {};
  status: "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: MarketDataState = {
  data: {},
  status: "pending",
  error: undefined,
};

export const marketDataSlice = createSlice({
  name: "marketData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMarketData.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchMarketData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchMarketData.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});

export default marketDataSlice.reducer;
