import React from "react";
import { useRef } from "react";

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

  return (
    <div
      ref={deckRef}
      className={`grid gap-6 py-8 side-padding ${
        countries.length != 0 ? "bento-grid" : "h-[60vh] place-items-center"
      }`}
    >
      {countries.length != 0 ? (
        countries.map((country: CountryInfos, index: number) => (
          <CountryCard
            key={country.name}
            index={index}
            columnCount={deckColumnCount}
            name={country.name}
            flags={country.flags}
            nativeName={country.nativeName}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex justify-center items-center gap-2">
            {/*Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 640 512"
            >
              <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
            </svg>
            <h1 className="text-2xl font-semibold">
              No Matching Countries Found
            </h1>
          </div>

          <div className="flex flex-col lighter-text text-center">
            <p> Check for any spelling mistakes in your search </p>
            <p> or try removing your regional filter </p>
          </div>
        </div>
      )}
    </div>
  );
}
