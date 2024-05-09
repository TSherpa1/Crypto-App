"use client";
import { fetchCoinList } from "@/lib/features/coinListSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { coinList } from "../../../../../utils/coinList";

const SearchBar = () => {
  const [coinInput, setCoinInput] = useState("");

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

  console.log(coins);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCoinInput(event.target.value);
  };

  return (
    <input
      className="bg-darkIndigo relative rounded-md p-3 pl-12 w-8/12 text-sm"
      type="text"
      onChange={handleChange}
      placeholder="Search..."
      value={coinInput}
    />
  );
};

export default SearchBar;
