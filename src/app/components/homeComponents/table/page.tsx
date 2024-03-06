import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchCoinList } from "@/lib/features/coinListSlice";

const Table = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCoinList());
  }, []);
  const coinListData = useAppSelector((state) => state.coinList);
  const coinList = coinListData.data;
  const firstTenCoins = coinList.slice(0, 10);
  return <div>Table</div>;
};

export default Table;
