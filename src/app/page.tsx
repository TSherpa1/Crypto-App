"use client";
import CurrencySelector from "./components/homeComponents/currencySelector/CurrencySelector";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-11/2">
      <CurrencySelector />
    </main>
  );
}
