"use client";
import Table from "./components/homeComponents/table/page";
import Charts from "./components/homeComponents/charts/page";
import CurrencySelector from "./components/homeComponents/currencySelector/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-11/2">
      <CurrencySelector />
    </main>
  );
}
