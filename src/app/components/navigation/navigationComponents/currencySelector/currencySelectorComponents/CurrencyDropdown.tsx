import { Currency, CurrencyDropdownProps } from "../types";
const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({
  currencies,
  setCurrency,
  toggleDropdown,
}) => {
  const handleClick = (currency: Currency) => {
    setCurrency(currency);
    toggleDropdown();
  };

  return (
    <ul className="bg-darkIndigo rounded-md m-2 w-full">
      {currencies.map((currency: Currency) => (
        <li
          className="flex items-center text-xs gap-2 p-3 rounded-md hover:bg-fadedIndigo cursor-pointer"
          key={currency.name}
          onClick={() => handleClick(currency)}
        >
          {currency.currencySVG}
          {currency.name}
        </li>
      ))}
    </ul>
  );
};

export default CurrencyDropdown;
