import React from "react";

import { useEffect } from "react";
import { atom, useAtom } from "jotai";

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

export const currentPageAtom = atom(0);
export const searchQueryAtom = atom("");
export const regionAtom = atom("");
export const sortingAtom = atom("");

export default function Home(props: Props) {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [region, setRegion] = useAtom(regionAtom);
  const [sorting, setSorting] = useAtom(sortingAtom);

  const { countries, changeCountries } = useCountriesState(props.countriesData);

  useEffect(() => {
    changeCountries();
    setCurrentPage(0);
  }, [searchQuery, region, sorting]);

  useEffect(() => {
    scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="grid homepage-grid py-8">
      <SearchFilters
        searchQueryState={searchQuery}
        onSearchChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(standardiseString(e.target.value))
        }
        onSortingChange={(newSorting: string) => setSorting(newSorting)}
        onRegionalFilterChange={(newRegion: string) => setRegion(newRegion)}
      />

      <CountryDeck
        countries={countries.slice(
          currentPage * props.cardCount,
          currentPage * props.cardCount + props.cardCount
        )}
      />

      {countries.length != 0 && (
        <PageSelector
          countryCount={countries.length}
          cardCount={props.cardCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
