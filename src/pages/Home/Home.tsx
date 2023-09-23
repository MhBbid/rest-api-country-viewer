import CountryDeck from "./CountryDeck";
import SearchFilters from "./SearchFilters";

export default function HomePage() {
  return (
    <div className="grid gap-12 side-padding">
      <SearchFilters />
      <CountryDeck />
    </div>
  );
}
