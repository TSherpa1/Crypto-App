const CurrencySelectorBtn = ({ currency }) => {
  console.log(currency);
  return (
    <button className="bg-darkIndigo p-3 text-xs rounded-md flex gap-2 w-full">
      {currency.currencySVG}
      {currency.name}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
};

export default CurrencySelectorBtn;
