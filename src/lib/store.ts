import { configureStore } from "@reduxjs/toolkit";
import coinListReducer from "./features/coinListSlice";
import bitcoinReducer from "./features/bitcoinSlice";
import singleCoinReducer from "./features/singleCoinSlice";
import marketDataReducer from "./features/marketSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      coinList: coinListReducer,
      bitcoin: bitcoinReducer,
      singleCoin: singleCoinReducer,
      marketData: marketDataReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
