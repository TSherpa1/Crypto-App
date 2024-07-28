"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchBitcoin } from "@/lib/features/bitcoinSlice";
import {
  bitcoinPriceData,
  bitcoinPriceChartData,
} from "../../../../../utils/bitcoinData";
import { LineGraph } from "./chartsComponents/LineGraph";

const Charts = () => {
  // const dispatch = useAppDispatch();

  //commented out to avoid extra api calls during production
  // useEffect(() => {
  //   dispatch(fetchBitcoin());
  // }, []);
  // const bitcoinDataObj = useAppSelector((state) => state.bitcoin);
  // const bitcoinData = bitcoinDataObj.data;

  // const bitcoinDataPrices = bitcoinData.prices || [];

  // const time = bitcoinDataPrices.map((priceData) => priceData[0]);
  // const price = bitcoinDataPrices.map((priceData) => priceData[1]);

  //using static dummy data for time being
  const time = bitcoinPriceData.map((priceData) => priceData[0]) || [];
  const price = bitcoinPriceData.map((priceData) => priceData[1]) || [];

  // console.log(bitcoinPriceChartData);
  // console.log(price);

  console.log("Charts time:", time);
  console.log("Charts price:", price);

  useEffect(() => {
    console.log("After rendering LineGraph - time:", time);
    console.log("After rendering LineGraph - price:", price);
  }, []);

  return (
    <div>
      <LineGraph />
      <div>Chart 2</div>
    </div>
  );
};

export default Charts;
