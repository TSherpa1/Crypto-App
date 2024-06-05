import { createSlice } from "@reduxjs/toolkit";
import { Currency } from "@/app/components/navigation/navigationComponents/currencySelector/types";

interface CurrentCurrencyState {
  currency: Currency;
}
const getInitialCurrency = (): Currency => {
  if (typeof window === "undefined") {
    return { name: "USD" };
  }
  const storedCurrency = localStorage.getItem("currentCurrency");
  if (!storedCurrency) {
    return { name: "USD" };
  }
  try {
    return JSON.parse(storedCurrency);
  } catch (error) {
    console.error("Error parsing stored currency", error);
    return { name: "USD" };
  }
};

const initialState: CurrentCurrencyState = {
  currency: getInitialCurrency(),
};

export const currentCurrencySlice = createSlice({
  name: "currentCurrency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
      localStorage.setItem("currentCurrency", JSON.stringify(action.payload));
    },
  },
});

export const { setCurrency } = currentCurrencySlice.actions;
export default currentCurrencySlice.reducer;
