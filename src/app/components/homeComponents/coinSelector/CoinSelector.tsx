"use client";
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchCoinList } from "@/lib/features/coinListSlice";
import Slider from "react-slick";
import CoinCard from "./coinSelectorComponents/CoinCard";
import { PrevArrow, NextArrow } from "./coinSelectorComponents/SliderArrows";

const CoinSelector = () => {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchCoinList());
  // }, [dispatch]);

  // const coinListDataObj = useAppSelector((state) => state.coinList);
  // const coinListData = coinListDataObj.data || [];
  // const firstTenCoins = coinListData.slice(0, 10);

  const firstTenCoins = [
    {
      id: "bitcoin",
      symbol: "btc",
      current_price: 70977,
      market_cap_change_percentage_24h: -2.50036,
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    },
    {
      id: "ethereum",
      symbol: "eth",
      current_price: 3574.26,
      market_cap_change_percentage_24h: 1.72432,
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    },
    {
      id: "tether",
      symbol: "usdt",
      current_price: 1.001,
      market_cap_change_percentage_24h: 0.22937,
      image:
        "https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661",
    },
    {
      id: "binancecoin",
      symbol: "bnb",
      current_price: 585.49,
      market_cap_change_percentage_24h: 1.68711,
      image:
        "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    },
    {
      id: "solana",
      symbol: "sol",
      current_price: 190.48,
      market_cap_change_percentage_24h: -2.005,
      image:
        "https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756",
    },
    {
      id: "staked-ether",
      symbol: "steth",
      current_price: 3564.52,
      market_cap_change_percentage_24h: 1.58146,
      image:
        "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1696513206",
    },
    {
      id: "ripple",
      symbol: "xrp",
      current_price: 0.625837,
      market_cap_change_percentage_24h: 2.2222,
      image:
        "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    },
    {
      id: "usd-coin",
      symbol: "usdc",
      current_price: 1.001,
      market_cap_change_percentage_24h: 0.74739,
      image:
        "https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    },
    {
      id: "dogecoin",
      symbol: "doge",
      current_price: 0.219445,
      market_cap_change_percentage_24h: -15.35035,
      image:
        "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    },
    {
      id: "cardano",
      symbol: "ada",
      current_price: 0.652289,
      market_cap_change_percentage_24h: 0.21717,
      image:
        "https://assets.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    },
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 878,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center w-full ">
      <div className="w-full flex justify-start">
        <h6 className="my-6 text-grey">
          Select the currency to view statistics
        </h6>
      </div>
      <div className="flex items-center gap-3 w-full ">
        <Slider {...settings} className="w-full">
          {firstTenCoins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CoinSelector;
