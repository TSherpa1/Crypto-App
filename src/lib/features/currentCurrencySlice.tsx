import { createSlice } from "@reduxjs/toolkit";
import { Currency } from "@/app/components/navigation/navigationComponents/currencySelector/types";

interface CurrentCurrencyState {
  currency: Currency;
}
const getInitialCurrency = (): Currency => {
  const storedCurrency = localStorage.getItem("currentCurrency");
  if (storedCurrency) {
    try {
      return JSON.parse(storedCurrency);
    } catch (error) {
      console.error("Error parsing stored currency", error);
    }
  }
  return {
    name: "USD",
    currencySVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 relative"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  };
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
      localStorage.setItem("currentCurrency", action.payload);
    },
  },
});

export const { setCurrency } = currentCurrencySlice.actions;
export default currentCurrencySlice.reducer;
