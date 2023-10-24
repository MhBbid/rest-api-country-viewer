import React from "react";
import { useState, useEffect } from "react";

import useCountriesData from "./hooks/useCountriesData";
import sortableData from "./util/sortableData";
import useTheme from "./hooks/useTheme";

const Skeleton = React.lazy(() => import("./Skeleton"));
const TopNav = React.lazy(() => import("./layouts/TopNav"));
const Home = React.lazy(() => import("./layouts/Home"));

const MaxCardsPerPage = 24;

export default function App() {
  const [countriesData, setCountriesData] = useState<sortableData>();
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
          <Home
            countriesData={countriesData}
            MaxCardsPerPage={MaxCardsPerPage}
          />
        </>
      ) : (
        <Skeleton skeletonCardCount={MaxCardsPerPage} />
      )}
    </>
  );
}
