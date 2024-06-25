"use client";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import CurrencyDropdown from "./currencySelectorComponents/CurrencyDropdown";
import CurrencySelectorBtn from "./currencySelectorComponents/CurrencySelectorBtn";
import { setCurrency } from "@/lib/features/currentCurrencySlice";
import { currencies } from "../../../../../../utils/currencyList";
import { Currency } from "./types";

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
    dispatch(setCurrency(selectedCurrency));
  };

  const findCurrencyByName = (name: string) => {
    return currencies.find((currency) => currency.name === name);
  };

  console.log(currentCurrency.name);
  const selectedCurrency = findCurrencyByName(currentCurrency.name);

  return (
    <div className="flex flex-col items-center h-full">
      {selectedCurrency && (
        <CurrencySelectorBtn
          currency={selectedCurrency}
          toggleDropdown={toggleDropdown}
        />
      )}
      {showDropdown && (
        <CurrencyDropdown
          setCurrency={handleSetCurrency}
          toggleDropdown={toggleDropdown}
        />
      )}
    </div>
  );
};

export default CurrencySelector;
