import React from "react";
import { useState, useEffect } from "react";
import { atomWithHash } from "jotai-location";
import { useAtom } from "jotai";

import useCountriesData from "./hooks/useCountriesData";
import sortableData from "./util/sortableData";
import useTheme from "./hooks/useTheme";
import { MaxCardsPerPage } from "./util/constants";

const Skeleton = React.lazy(() => import("./Skeleton"));
const TopNav = React.lazy(() => import("./layouts/TopNav"));
const Home = React.lazy(() => import("./layouts/Home"));

export const selectedCountryAtom = atomWithHash("country", "");

export default function App() {
  const [countriesData, setCountriesData] = useState<sortableData>();
  const [selectedCountry, setSelectedCountry] = useAtom(selectedCountryAtom);
  const { currentTheme, changeTheme } = useTheme();

  useEffect(() => {
    useCountriesData().then((countriesFetched: sortableData) => {
      setCountriesData(countriesFetched);
    });
  }, []);

  return (
    <>
      {countriesData ? (
        <>
          <TopNav currentTheme={currentTheme} changeTheme={changeTheme} />
          <Home countriesData={countriesData} cardCount={MaxCardsPerPage} />
        </>
      ) : (
        <Skeleton skeletonCardCount={MaxCardsPerPage} />
      )}
    </>
  );
}
