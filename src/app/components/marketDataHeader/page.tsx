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

  const marketData = useAppSelector((state) => state.marketData.data);
  const { data } = marketData;
  return (
    <div>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Coins {data.active_cryptocurrencies}</p>
          <p>Exchange {data.markets}</p>
          <p>{convertNumber(data.total_volume.btc)}</p>
          <p>{convertNumber(data.total_market_cap.btc)}</p>
          <p>{convertToPercent(data.market_cap_percentage.btc)}</p>
          <p>{convertToPercent(data.market_cap_percentage.eth)}</p>
        </>
      )}
    </div>
  );
};

export default MarketDataHeader;
