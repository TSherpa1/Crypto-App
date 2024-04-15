import React, { useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addCoin, removeCoin } from "@/lib/features/currentCoinsSlice";
import {
  GreenArrowSVG,
  RedArrowSVG,
} from "../../../../../../public/currencySelectorSVGS";
interface Coin {
  id: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap_change_percentage_24h: number;
}

const CurrencyDiv = ({ coin }: { coin: Coin }) => {
  const [highlighted, setHighlighted] = useState(false);
  const dispatch = useAppDispatch();
  const selectedCoins = useAppSelector((state) => state.currentCoins.coins);

  const handleClick = () => {
    if (!selectedCoins.includes(coin.id)) {
      dispatch(addCoin(coin.id));
    } else {
      dispatch(removeCoin(coin.id));
    }
    setHighlighted(!highlighted);
  };

  return (
    <div className="px-2">
      <div
        className={`flex items-center justify-evenly ${
          highlighted ? "bg-fadedIndigo" : "bg-darkIndigo"
        } rounded-md p-5 gap-3 cursor-pointer hover:bg-fadedIndigo`}
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

            <div className="flex items-center content-center">
              {coin.market_cap_change_percentage_24h < 0 ? (
                <GreenArrowSVG />
              ) : (
                <RedArrowSVG />
              )}
              <p
                className={
                  coin.market_cap_change_percentage_24h < 0
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {Math.abs(
                  Math.ceil(coin.market_cap_change_percentage_24h * 100) / 100
                )}
                %
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyDiv;
