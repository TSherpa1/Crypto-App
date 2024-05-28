"use client";
import { useState } from "react";
import CurrencyDropdown from "./currencySelectorComponents/CurrencyDropdown";
import CurrencySelectorBtn from "./currencySelectorComponents/CurrencySelectorBtn";
import { currencies } from "../../../../../../utils/currencyList";

const CurrencySelector = () => {
  const [currentCurrency, setCurrentCurrency] = useState(currencies[0]);
  return (
    <div className="flex flex-col items-center">
      <CurrencySelectorBtn currency={currentCurrency} />
      <CurrencyDropdown />
    </div>
  );
};

export default CurrencySelector;
