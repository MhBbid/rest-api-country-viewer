import React from "react";
import { useState, useEffect } from "react";

import useCountriesState from "../hooks/useCountriesState";
import sortableData from "../util/sortableData";
import { standardiseString } from "../util/stringUtilities";

const SearchFilters = React.lazy(() => import("./SearchFilters"));
const CountryDeck = React.lazy(() => import("./CountryDeck"));

interface Props {
  countriesData: sortableData;
  MaxCardsPerPage: number;
}

export default function Home(props: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("");
  const [sorting, setSorting] = useState("");

  const { countries, changeCountries } = useCountriesState(
    props.countriesData,
    searchQuery,
    region,
    sorting
  );

  useEffect(() => {
    changeCountries();
  }, [searchQuery, region, sorting]);

  return (
    <div className="grid homepage-grid py-8 side-padding">
      <SearchFilters
        searchQueryState={searchQuery}
        onSearchChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const standardisedinput = standardiseString(e.target.value);
          setSearchQuery(standardisedinput);
        }}
        onSortingChange={(newSorting: string) => setSorting(newSorting)}
        onRegionalFilterChange={(newRegion: string) => setRegion(newRegion)}
      />
      <CountryDeck countries={countries.slice(0, props.MaxCardsPerPage + 0)} />
    </div>
  );
}
