"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchMarketData } from "@/lib/features/marketSlice";
import { convertNumber, convertToPercent } from "../../../../utils/conversions";
import {
  CoinsSVG,
  ExchangeSVG,
  TotalMarketCapBarSVG,
  TotalVolumeSVG,
  MarketCapPercentSVG,
  MarketCapPercentBarSVG,
  MarketCapPercentSVG2,
  MarketCapPercentBarSVG2,
} from "../../../../public/marketDataSVGS";

const MarketDataHeader = () => {
  console.log("component ran");
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("useEffect ran");
    dispatch(fetchMarketData());
  }, []);

  const marketData = useAppSelector((state) => state.marketData.data);
  const { data } = marketData;
  console.log(data);
  return (
    <div className="market-data-container flex bg-lightIndigo w-full justify-center items-center py-5 ">
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-16 w">
          <div className="flex items-center gap-2">
            <CoinsSVG />
            <p className="text-xs font-medium">
              Coins {data.active_cryptocurrencies}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ExchangeSVG />
            <p className="text-xs font-medium">Exchange {data.markets}</p>
          </div>
          <div className="flex items-center gap-2">
            <TotalVolumeSVG />
            <p className="text-xs font-medium">
              {convertNumber(data.total_volume.btc)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium">
              {convertNumber(data.total_market_cap.btc)}
            </p>
            <TotalMarketCapBarSVG />
          </div>
          <div className="flex items-center gap-2">
            <MarketCapPercentSVG />
            <p className="text-xs font-medium">
              {convertToPercent(data.market_cap_percentage.btc)}
            </p>
            <MarketCapPercentBarSVG />
          </div>
          <div className="flex items-center gap-2">
            <MarketCapPercentSVG2 />
            <p className="text-xs font-medium">
              {convertToPercent(data.market_cap_percentage.eth)}
            </p>
            <MarketCapPercentBarSVG2 />
          </div>
        </div>
      )}
    </div>
  );
};

export default MarketDataHeader;
