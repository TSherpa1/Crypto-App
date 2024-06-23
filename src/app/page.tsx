"use client";
import CoinSelector from "./components/homeComponents/coinSelector/CoinSelector";
import CoinsConverter from "./components/homeComponents/coinsConverter/CoinsConverter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 w-11/2">
      <CoinsConverter />
      <CoinSelector />
    </main>
  );
}
