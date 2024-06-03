"use client";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import CurrencyDropdown from "./currencySelectorComponents/CurrencyDropdown";
import CurrencySelectorBtn from "./currencySelectorComponents/CurrencySelectorBtn";
import { currencies } from "../../../../../../utils/currencyList";
import { Currency } from "./types";
import { setCurrency } from "@/lib/features/currentCurrencySlice";

const CurrencySelector = () => {
  const dispatch = useAppDispatch();
  const currentCurrency = useAppSelector(
    (state) => state.currentCurrency.currency
  );
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSetCurrency = (selectedCurrency: Currency) => {
    const currency = currencies.filter(
      (currency) => currency.name === selectedCurrency.name
    );
    if (currency) {
      dispatch(setCurrency(currency[0]));
    }
  };

  return (
    <div className="flex flex-col items-center h-full">
      <CurrencySelectorBtn
        currency={currentCurrency}
        toggleDropdown={toggleDropdown}
      />
      {showDropdown && (
        <CurrencyDropdown
          currencies={currencies}
          setCurrency={handleSetCurrency}
          toggleDropdown={toggleDropdown}
        />
      )}
    </div>
  );
};

export default CurrencySelector;
