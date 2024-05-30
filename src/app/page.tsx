"use client";
import CoinSelector from "./components/homeComponents/coinSelector/CoinSelector";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-11/2">
      <CoinSelector />
    </main>
  );
}
