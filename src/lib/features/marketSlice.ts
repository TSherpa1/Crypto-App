import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface MarketData {
  active_cryptocurrencies: number;
  markets: number;
  total_volume: { [key: string]: number };
  total_market_cap: { [key: string]: number };
  market_cap_percentage: { [key: string]: number };
}

interface MarketDataState {
  data: MarketData;
  status: "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: MarketDataState = {
  data: {
    active_cryptocurrencies: 0,
    markets: 0,
    total_volume: {},
    total_market_cap: {},
    market_cap_percentage: {},
  },
  status: "pending",
  error: undefined,
};

export const fetchMarketData = createAsyncThunk<MarketData>(
  "getMarketData",
  async () => {
    const { data } = await axios<MarketData>(
      "https://api.coingecko.com/api/v3/global"
    );
    return data;
  }
);

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
