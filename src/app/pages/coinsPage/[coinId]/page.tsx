"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchSingleCoin } from "@/lib/features/singleCoinSlice";

const Coin = ({ params }: { params: { coinId: string } }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchSingleCoin());
  }, []);
  // useEffect(() => {
  //   dispatch(fetchSingleCoin(params.coinId));
  // }, []);
  const singleCoinDataObj = useAppSelector((state) => state.singleCoin);
  const singleCoinData = singleCoinDataObj.data;
  return <div>{params.coinId}</div>;
};

export default Coin;
