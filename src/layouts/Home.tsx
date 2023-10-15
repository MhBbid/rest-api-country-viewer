import { useEffect, useState } from "react";
import { standardiseString } from "../util/utilityFunctions";

import SearchFilters from "./SearchFilters";
import CountryDeck from "./CountryDeck";
import useCountries from "../hooks/useCountries";

const MaxCardsPerPage = 12;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("");
  const [sorting, setSorting] = useState("");

  const { countries, changeCountries } = useCountries(
    searchQuery,
    region,
    sorting
  );

  useEffect(() => {
    changeCountries();
  }, [searchQuery, region, sorting]);

  return (
    <div className="grid homepage-grid py-8 side-padding h-5/6 ">
      <SearchFilters
        onSearchChange={(e: any) =>
          setSearchQuery(standardiseString(e.target.value))
        }
        onSortingChange={(newSorting: string) => setSorting(newSorting)}
        onRegionalFilterChange={(newRegion: string) => setRegion(newRegion)}
      />
      <CountryDeck countries={countries.slice(0, MaxCardsPerPage + 0)} />
    </div>
  );
}
