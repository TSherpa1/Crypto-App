import { configureStore } from "@reduxjs/toolkit";
import { exampleReducer } from "./features/example";
import coinListReducer from "./features/coinListSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      example: exampleReducer,
      coinList: coinListReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
