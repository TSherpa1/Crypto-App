import { configureStore } from "@reduxjs/toolkit";

import {
  coinListReducer,
  bitcoinReducer,
  singleCoinReducer,
  marketDataReducer,
  currentCoinsReducer,
  currentCurrencyReducer,
  coinsConverterReducer,
} from "./features";

export const makeStore = () => {
  return configureStore({
    reducer: {
      coinList: coinListReducer,
      bitcoin: bitcoinReducer,
      singleCoin: singleCoinReducer,
      marketData: marketDataReducer,
      currentCoins: currentCoinsReducer,
      coinsConverter: coinsConverterReducer,
      currentCurrency: currentCurrencyReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
