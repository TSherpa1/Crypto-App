"use client";
import { fetchCoinList } from "@/lib/features/coinListSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { coinList } from "../../../../../../utils/coinList";
import SearchDropdown from "./SearchBarComponents/SearchDropdown";

interface Coin {
  name: string;
  id: string;
}

const SearchBar = () => {
  const [coinInput, setCoinInput] = useState("");
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);
  const [displayDropdown, setDisplayDropdown] = useState(false);

  //   const dispatch = useAppDispatch();
  //   useEffect(() => {
  //     dispatch(fetchCoinList());
  //     console.log("running");
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
    <div>
      <input
        className="bg-darkIndigo relative rounded-md p-3 pl-12 w-full text-sm"
        type="text"
        onChange={handleChange}
        placeholder="Search..."
        value={coinInput}
        onBlur={handleBlur}
      />
      {displayDropdown ? <SearchDropdown filteredCoins={filteredCoins} /> : ""}
    </div>
  );
};

export default SearchBar;
