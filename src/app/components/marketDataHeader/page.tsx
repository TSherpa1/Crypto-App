"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchMarketData } from "@/lib/features/marketSlice";
import { convertNumber, convertToPercent } from "../../../../utils/conversions";

const MarketDataHeader = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMarketData());
  }, []);
  const marketDataObj = useAppSelector((state) => state.marketData.data);
  const marketData = marketDataObj.data;
  return (
    <div>
      {marketData ? (
        <>
          <p>Coins {marketData.active_cryptocurrencies}</p>
          <p>Exchange {marketData.markets}</p>
          <p>{convertNumber(marketData.total_volume.btc)}</p>
          <p>{convertNumber(marketData.total_market_cap.btc)}</p>
          <p>{convertToPercent(marketData.market_cap_percentage.btc)}</p>
          <p>{convertToPercent(marketData.market_cap_percentage.eth)}</p>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default MarketDataHeader;
