import React from "react";
import { useRef } from "react";

import { useAtom } from "jotai";
import { searchQueryAtom, regionAtom, sortingAtom } from "./Home";

import { CountryInfos } from "../util/customTypes";
import { useGridColumnCount } from "../hooks/useGridColumnCount";

const CountryCard = React.lazy(() => import("./../components/CountryCard"));

interface Props {
  countries: CountryInfos[];
}

export default function CountryDeck(props: Props) {
  const deckRef = useRef<HTMLDivElement | null>(null);
  const deckColumnCount = deckRef != null ? useGridColumnCount(deckRef) : 0;
  const countries = props.countries;

  const searchQuery = useAtom(searchQueryAtom);
  const regionalFilter = useAtom(regionAtom);
  const sorting = useAtom(sortingAtom);

  return (
    <div ref={deckRef} className="grid bento-grid gap-6 py-8 side-padding">
      {countries.map((country: CountryInfos, index: number) => (
        <CountryCard
          // I want react to treat this as a brand new component everytime any of the filters change
          // so that it does the card reveal animation
          key={`${country.name}: @${searchQuery},${regionalFilter},${sorting}`}
          index={index}
          columnCount={deckColumnCount}
          name={country.name}
          flags={country.flags}
          nativeName={country.nativeName}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  );
}
