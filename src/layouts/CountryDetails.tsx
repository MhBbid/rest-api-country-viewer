import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { useAtom } from "jotai";
import { selectedCountryAtom } from "../App";
import { countriesDataAtom } from "../App";

import { CountryDetails } from "../util/customTypes";
import { standardiseString } from "../util/misc";
import CountryDetailInfo from "../components/CountryDetailInfo";
import InvalidSelectedCountry from "./InvalidSelectedCountry";

export default function CountryDetails() {
  const [selectedCountry, setSelectedCountry] = useAtom(selectedCountryAtom);
  const [countriesData] = useAtom(countriesDataAtom);

  const [selectedCountryData, setSelectedCountryData] =
    useState<CountryDetails>();

  const previousSelectedCountryData = useRef<CountryDetails>();
  const [, setLatestSelectedCountryData] = useState<CountryDetails>();

  useEffect(() => {
    previousSelectedCountryData.current = selectedCountryData;
    setLatestSelectedCountryData(
      selectedCountryData
        ? selectedCountryData
        : previousSelectedCountryData.current
    );

    document.documentElement.style.overflow =
      selectedCountry != "" ? "hidden" : "auto";

    setSelectedCountryData(
      countriesData &&
        countriesData.data.find(
          (country: CountryDetails) =>
            standardiseString(country.name) == selectedCountry
        )
    );
  }, [selectedCountry]);

  return (
    <motion.div
      className="darker-background fixed overflow-scroll h-screen w-full py-8 side-padding z-50"
      variants={{
        // i dont get why this animation is so janky without this translateX bullshittery,
        // but i have to blame something
        // F r a m e r  M o t i o n
        visible: {
          translateX: "-50vw",
          transitionEnd: { translateX: 0 },
        },
        hidden: {
          translateX: "150vw",
          transitionEnd: { translateX: "100vw" },
        },
      }}
      initial={selectedCountry != "" ? "visible" : "hidden"}
      animate={selectedCountry != "" ? "visible" : "hidden"}
      transition={{ duration: 0.4 }}
    >
      <button
        className="default-background default-hover rounded-lg pl-9 pr-12 py-3 fixed flex justify-center items-center gap-4"
        onClick={() => setSelectedCountry("")}
        disabled={selectedCountry == ""}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
        </svg>
        Back
      </button>

      {selectedCountryData?.name ||
      (selectedCountry == "" && previousSelectedCountryData.current?.name) ? (
        <>
          <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-32 flex flex-col gap-10 mt-24 mb-12">
            <div className="darkest-background max-h-[50vh] min-w-full">
              <img
                key={selectedCountry}
                className="h-full w-full max-h-[50vh] object-cover"
                loading="lazy"
                src={
                  // this is absolutely disgusting and i pity you for even being unlucky enough to have to bare witness to this
                  selectedCountryData
                    ? selectedCountryData.flags.png
                    : selectedCountry == "" &&
                      previousSelectedCountryData.current
                    ? previousSelectedCountryData.current.flags.png
                    : undefined
                }
              />
            </div>

            <div>
              <CountryDetailInfo
                countryData={
                  // same here
                  (selectedCountryData
                    ? selectedCountryData
                    : previousSelectedCountryData.current) != undefined
                    ? selectedCountryData
                      ? selectedCountryData
                      : previousSelectedCountryData.current
                    : null
                }
              />

              <div className="flex flex-col gap-2 m-8">
                <h1 className="ml-2">
                  {((selectedCountryData != undefined &&
                    selectedCountryData.borders != "") ||
                    (selectedCountry == "" &&
                      previousSelectedCountryData.current != undefined &&
                      previousSelectedCountryData.current.borders != "")) &&
                    "Border Countries:"}
                </h1>

                <div className="flex flex-wrap gap-2">
                  {selectedCountryData != undefined &&
                  selectedCountryData.borders != ""
                    ? selectedCountryData.borders.map(
                        (borderCountry: string) => (
                          <button
                            key={borderCountry}
                            className="default-background default-hover rounded-md text-sm px-6 py-2"
                            disabled={selectedCountry == ""}
                            onClick={() =>
                              setSelectedCountry(
                                standardiseString(
                                  countriesData?.data.find(
                                    (country: CountryDetails) =>
                                      country.cca3 === borderCountry
                                  ).name
                                )
                              )
                            }
                          >
                            {
                              countriesData?.data.find(
                                (country: CountryDetails) =>
                                  country.cca3 === borderCountry
                              ).name
                            }
                          </button>
                        )
                      )
                    : selectedCountry == "" &&
                      previousSelectedCountryData.current != undefined &&
                      previousSelectedCountryData.current?.borders != "" &&
                      previousSelectedCountryData.current.borders.map(
                        (borderCountry: string) => (
                          <button
                            key={borderCountry}
                            className="default-background default-hover rounded-md px-6 py-2"
                            disabled={selectedCountry == ""}
                          >
                            {
                              countriesData?.data.find(
                                (country: CountryDetails) =>
                                  country.cca3 === borderCountry
                              ).name
                            }
                          </button>
                        )
                      )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <InvalidSelectedCountry />
      )}
    </motion.div>
  );
}
