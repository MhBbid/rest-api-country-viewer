import React from "react";
import { useEffect } from "react";

import { atom, useAtom } from "jotai";
import { atomWithHash } from "jotai-location";

import useCountriesData from "./hooks/useCountriesData";
import sortableData from "./util/sortableData";
import useTheme from "./hooks/useTheme";
import { MAX_CARDS_PER_PAGE } from "./util/misc";
import CountryDetails from "./layouts/CountryDetails";

const Skeleton = React.lazy(() => import("./Skeleton"));
const TopNav = React.lazy(() => import("./layouts/TopNav"));
const Home = React.lazy(() => import("./layouts/Home"));

export const countriesDataAtom = atom<sortableData | null>(null);
export const selectedCountryAtom = atomWithHash("country", "");

export default function App() {
  const [countriesData, setCountriesData] = useAtom(countriesDataAtom);
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
          {/* TopNav has position fixed but we still want its space reserved so cheap ass fix go wild*/}
          <div className="h-20"></div>

          <CountryDetails />
          <Home countriesData={countriesData} cardCount={MAX_CARDS_PER_PAGE} />
        </>
      ) : (
        <Skeleton skeletonCardCount={MAX_CARDS_PER_PAGE} />
      )}
    </>
  );
}
