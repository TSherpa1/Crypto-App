import React from "react";
import Image from "next/image";
import { useAppDispatch } from "@/lib/hooks";

interface Coin {
  id: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap_change_percentage_24h: number;
}

const CurrencyDiv = ({ coin }: { coin: Coin }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    //not made yet
    // dispatch(setSingleCoin(coin.id));
  };
  return (
    <div className="px-2">
      <div
        className="flex items-center justify-evenly bg-darkIndigo rounded-md p-5 gap-3 cursor-pointer hover:bg-fadedIndigo"
        onClick={handleClick}
      >
        <div>
          <Image src={coin.image} alt="" width="35" height="35" />
        </div>
        <div className="text-center text-sm mt-2">
          <div className="flex gap-2">
            <p>{coin.id.charAt(0).toUpperCase() + coin.id.slice(1)}</p>
            <p>({coin.symbol.toUpperCase()})</p>
          </div>
          <div className="flex gap-3">
            <p className="text-grey">
              {Math.ceil(coin.current_price * 100) / 100} USD
            </p>
            <p>
              {Math.ceil(coin.market_cap_change_percentage_24h * 100) / 100}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyDiv;
