import React from "react";
import { useState, useEffect } from "react";

import useCountriesState from "../hooks/useCountriesState";
import sortableData from "../util/sortableData";
import { standardiseString } from "../util/stringUtilities";
import PageSelector from "../components/PageSelector";

const SearchFilters = React.lazy(() => import("./SearchFilters"));
const CountryDeck = React.lazy(() => import("./CountryDeck"));

interface Props {
  countriesData: sortableData;
  cardCount: number;
}

export default function Home(props: Props) {
  const [currentPage, setCurrentPage] = useState(0);
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
    setCurrentPage(0);
  }, [searchQuery, region, sorting]);

  return (
    <div className="grid homepage-grid py-8 side-padding">
      <SearchFilters
        searchQueryState={searchQuery}
        onSearchChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(standardiseString(e.target.value))
        }
        onSortingChange={(newSorting: string) => setSorting(newSorting)}
        onRegionalFilterChange={(newRegion: string) => setRegion(newRegion)}
      />

      <PageSelector
        display={`${currentPage + 1}`}
        hasPrevious={currentPage > 0}
        hasNext={currentPage < countries.length / props.cardCount - 1}
        onPrevious={() => setCurrentPage((prev) => prev - 1)}
        onNext={() => setCurrentPage((prev) => prev + 1)}
      />

      <CountryDeck
        countries={countries.slice(
          currentPage * props.cardCount,
          currentPage * props.cardCount + props.cardCount
        )}
      />
    </div>
  );
}
