import { useState } from "react";
import { useAtom } from "jotai";

import sortableData from "../util/sortableData";
import { searchQueryAtom, regionAtom, sortingAtom } from "../layouts/Home";

import { CountryDetails } from "../util/customTypes";
import { Regions, Sortings } from "../util/misc";
import { standardiseString } from "../util/misc";

export default function useCountriesState(countriesFetched: sortableData) {
  const [countries, setFiltredCountries] = useState(countriesFetched.data);
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const [regionalFilter, setRegionalFilter] = useAtom(regionAtom);
  const [sorting, setSorting] = useAtom(sortingAtom);

  function changeCountries() {
    sortCountriesFetched();

    setFiltredCountries(() =>
      countriesFetched.data.filter((country: CountryDetails) => {
        const name = standardiseString(country.name.toString());
        const nativeName = standardiseString(country.nativeName.toString());
        const region = country.region;

        return (
          (name.includes(searchQuery) || nativeName.includes(searchQuery)) &&
          (!Regions.includes(regionalFilter) || region == regionalFilter)
        );
      })
    );
  }

  function sortCountriesFetched() {
    switch (sorting) {
      case Sortings[0]:
        countriesFetched.sortAlphabetically.fromA();
        break;
      case Sortings[1]:
        countriesFetched.sortAlphabetically.fromZ();
        break;
      case Sortings[2]:
        countriesFetched.sortNumerically.fromHighest();
        break;
      case Sortings[3]:
        countriesFetched.sortNumerically.fromLowest();
        break;
    }
  }

  return { countries, changeCountries };
}
