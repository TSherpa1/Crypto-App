import { configureStore } from "@reduxjs/toolkit";
import coinListReducer from "./features/coinListSlice";
import bitcoinReducer from "./features/bitcoinSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      coinList: coinListReducer,
      bitcoin: bitcoinReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
