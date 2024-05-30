"use client";
import { fetchCoinList } from "@/lib/features/coinListSlice";
import { useAppDispatch, useAppSelector, useEffect } from "@/lib/hooks";
import { ChangeEvent, useState } from "react";
import { coinList } from "../../../../../../utils/coinList";
import SearchDropdown from "./SearchBarComponents/SearchDropdown";
import { Coin } from "./types";

const SearchBar = () => {
  const [coinInput, setCoinInput] = useState("");
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);
  const [displayDropdown, setDisplayDropdown] = useState(false);

  //   code not being used at the moment for the sake of avoiding api call limit, using a seperate file
  //   with dummy data that isn't live
  //   const dispatch = useAppDispatch();
  //   useEffect(() => {
  //     dispatch(fetchCoinList());
  //   }, []);

  //   const coinList = useAppSelector((state) => state.coinList.data);

  const coins = coinList.map((coin) => ({
    name: coin.name,
    id: coin.id,
  }));

  const searchCoin = (coinInput: string) => {
    const filter = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(coinInput.toLowerCase());
    });
    setFilteredCoins(filter);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDisplayDropdown(true);
    const input = event.target.value;
    setCoinInput(input);
    searchCoin(input);
  };

  const handleBlur = () => {
    setDisplayDropdown(false);
  };

  return (
    <div className="w-full h-full">
      <div className="flex gap-4 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 relative top-3 left-12 z-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          className="bg-darkIndigo relative rounded-md p-3 pl-12 w-full text-sm"
          type="text"
          onChange={handleChange}
          placeholder="Search..."
          value={coinInput}
          onBlur={handleBlur}
        />
      </div>
      {displayDropdown && <SearchDropdown filteredCoins={filteredCoins} />}
    </div>
  );
};

export default SearchBar;
