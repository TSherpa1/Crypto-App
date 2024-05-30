import {
  Logo,
  HomeLink,
  PortfolioLink,
  SearchBar,
  CurrencySelector,
  ThemeSelector,
} from "./";

export default function Navigation() {
  return (
    <div className="navigation-container flex p-20 text-white justify-between items-center">
      <Logo />
      <div className="nav-links-container flex gap-14 relative right-14 text-sm">
        <HomeLink />
        <PortfolioLink />
      </div>
      <div className="nav-search-button-container flex items-center gap-3 w-2/5 h-11 relative right-32">
        <SearchBar />
        <CurrencySelector />
        <ThemeSelector />
      </div>
    </div>
  );
}
