import type { Metadata } from "next";
import Navigation from "./components/navigation/page";
import MarketDataHeader from "./components/marketDataHeader/page";
import StoreProvider from "./StoreProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-main w-full">
        <StoreProvider>
          <MarketDataHeader />
          <Navigation />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
