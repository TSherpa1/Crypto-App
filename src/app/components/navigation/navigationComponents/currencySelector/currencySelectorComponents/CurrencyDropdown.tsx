import { currencies } from "../../../../../../../utils/currencyList";

const CurrencyDropdown = () => {
  return (
    <ul className="bg-darkIndigo rounded-md m-2 w-full">
      {currencies.map((currency) => (
        <li
          className="flex items-center text-xs gap-2 p-3 rounded-md hover:bg-fadedIndigo cursor-pointer"
          key={currency.name}
        >
          {currency.currencySVG}
          {currency.name}
        </li>
      ))}
    </ul>
  );
};

export default CurrencyDropdown;
