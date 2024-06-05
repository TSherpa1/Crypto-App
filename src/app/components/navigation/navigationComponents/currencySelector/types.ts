export interface Currency {
  name: string;
  currencySVG?: React.ReactNode;
}

export interface CurrencyDropdownProps {
  setCurrency: (currency: Currency) => void;
  toggleDropdown: () => void;
}

export interface CurrencySelectorBtnProps {
  currency: Currency;
  toggleDropdown: () => void;
}
