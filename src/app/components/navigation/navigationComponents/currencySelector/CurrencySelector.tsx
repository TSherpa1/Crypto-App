"use client";
import { useState } from "react";
import CurrencyDropdown from "./currencySelectorComponents/CurrencyDropdown";
import CurrencySelectorBtn from "./currencySelectorComponents/CurrencySelectorBtn";
import { currencies } from "../../../../../../utils/currencyList";
import { Currency } from "./types";

const CurrencySelector = () => {
  //need to grab the currentCurrency from the redux store and make that the initial state
  const [currentCurrency, setCurrentCurrency] = useState(currencies[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const setCurrency = (selectedCurrency: Currency) => {
    const currency = currencies.filter(
      (currency) => currency.name === selectedCurrency.name
    );
    if (currency) {
      setCurrentCurrency(currency[0]);
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
          setCurrency={setCurrency}
          toggleDropdown={toggleDropdown}
        />
      )}
    </div>
  );
};

export default CurrencySelector;