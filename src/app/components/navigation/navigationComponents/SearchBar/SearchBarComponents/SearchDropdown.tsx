"use client";
import Link from "next/link";
import React from "react";

interface Coin {
  name: string;
  id: string;
}

const SearchDropdown = ({ filteredCoins }: { filteredCoins: Coin[] }) => {
  return (
    <>
      {filteredCoins.length !== 0 && (
        <div className="flex flex-col bg-darkIndigo my-1 pd-px max-h-52 rounded-md overflow-hidden overflow-y-scroll ml-8">
          {filteredCoins.map((coin) => (
            <Link href={`/pages/coinsPage/${coin.id}`} key={coin.id}>
              <p className="p-4 hover:bg-fadedIndigo rounded-md">{coin.name}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
export default SearchDropdown;
