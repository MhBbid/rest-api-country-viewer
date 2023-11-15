import React, { useRef } from "react";

import { useState, useEffect } from "react";
import { atom, useAtom } from "jotai";

import useCountriesState from "../hooks/useCountriesState";
import sortableData from "../util/sortableData";
import { standardiseString } from "../util/misc";

const SearchFilters = React.lazy(() => import("./SearchFilters"));
const CountryDeck = React.lazy(() => import("./CountryDeck"));
const NoCountriesFound = React.lazy(() => import("./NoCountriesFound"));

const ScrollToTop = React.lazy(() => import("../components/ScrollToTop"));
const PageSelector = React.lazy(() => import("../components/PageSelector"));

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
  const [countriesSlice, setCountriesSlice] = useState(
    countries.slice(
      currentPage * props.cardCount,
      currentPage * props.cardCount + props.cardCount
    )
  );

  const [didMount, setDidMount] = useState(false);

  const homeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setDidMount(true);
  }, []);

  // we don't want to scroll to the top when the component first renders, only when currentPage explicitly changes
  // that's what didMount is for
  useEffect(() => {
    didMount && currentPage != null && scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    changeCountries();
    setCurrentPage(0);
  }, [searchQuery, region, sorting]);

  useEffect(() => {
    setCountriesSlice(
      countries.slice(
        currentPage * props.cardCount,
        currentPage * props.cardCount + props.cardCount
      )
    );
  }, [countries, currentPage]);

  return (
    <div ref={homeRef} className="grid homepage-grid py-8">
      <SearchFilters
        searchQueryState={searchQuery}
        onSearchChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(standardiseString(e.target.value))
        }
        onSortingChange={(newSorting: string) => setSorting(newSorting)}
        onRegionalFilterChange={(newRegion: string) => setRegion(newRegion)}
      />

      {countriesSlice.length != 0 ? (
        <CountryDeck countries={countriesSlice} />
      ) : (
        <NoCountriesFound />
      )}

      {countries.length != 0 && (
        <PageSelector
          countryCount={countries.length}
          cardCount={props.cardCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      <ScrollToTop />
    </div>
  );
}
