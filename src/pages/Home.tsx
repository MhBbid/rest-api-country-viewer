import { useState } from "react";
import { standardiseString } from "../util/utilityFunctions";

import { countries } from "../util/countriesData";
import { CountryDetails } from "../util/customTypes";

import SearchFilters from "./SearchFilters";
import CountryDeck from "./CountryDeck";

const MaxCards = 24;

export default function Home() {
  const [filtredCountries, setFiltredCountries] = useState(countries.data);

  function onSearchChange(e: any) {
    const searchValue = standardiseString(e.target.value);

    setFiltredCountries(
      countries.data.filter(
        (item: CountryDetails) =>
          standardiseString(item.name.toString()).includes(searchValue) ||
          standardiseString(item.nativeName.toString()).includes(searchValue) ||
          standardiseString(item.capital.toString()).includes(searchValue)
      )
    );
  }

  return (
    <div className="grid gap-8 py-8 side-padding">
      <SearchFilters onSearchChange={onSearchChange} />
      <CountryDeck countries={filtredCountries.slice(0, MaxCards + 0)} />
    </div>
  );
}
