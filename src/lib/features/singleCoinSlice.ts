import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleCoin = createAsyncThunk("getSingleCoin", async () => {
  const { data } = await axios(
    "https://api.coingecko.com/api/v3/coins/shiba-inu?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false"
  );
  return data;
});

interface SingleCoinState {
  data: {};
  status: "pending" | "succeeded" | "failed";
  error: string | undefined;
}

const initialState: SingleCoinState = {
  data: {},
  status: "pending",
  error: undefined,
};

export const singleCoinSlice = createSlice({
  name: "singleCoin",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSingleCoin.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchSingleCoin.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchSingleCoin.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});

export default singleCoinSlice.reducer;
