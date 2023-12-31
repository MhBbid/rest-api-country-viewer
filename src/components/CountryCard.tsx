import { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { useInView } from "framer-motion";

import { standardiseString } from "../util/misc";
import { selectedCountryAtom } from "../App";
import { CountryInfos } from "../util/customTypes";

import CountryCardInfo from "./CountryCardInfo";
import { motion } from "framer-motion";

interface Props extends CountryInfos {
  columnCount: number;
  index: number;
}

export default function CountryCard(props: Props) {
  const cardRef = useRef<HTMLButtonElement | null>(null);
  const [selectedCountry, setSelectedCountry] = useAtom(selectedCountryAtom);
  const [isCardDisabled, setIsCardDisabled] = useState(false);

  const isCardInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  const [, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    selectedCountry == ""
      ? setTimeout(() => {
          setIsCardDisabled(false);
        }, 400)
      : setIsCardDisabled(true);
  }, [selectedCountry]);

  return (
    <motion.button
      ref={cardRef}
      tabIndex={0}
      className="default-background default-hover flex flex-col rounded-md overflow-hidden h-full card-hover"
      onClick={() => setSelectedCountry(standardiseString(props.name))}
      disabled={isCardDisabled}
      variants={{
        inView: { opacity: 1, translateY: 0 },
        outOfView: { opacity: 0.05, translateY: 100 },
      }}
      initial={"outOfView"}
      animate={isCardInView ? "inView" : "outOfView"}
      transition={{
        duration: 0.15,
        delay: 0.1 + (props.index % props.columnCount) * 0.1,
        ease: "easeOut",
      }}
    >
      <div className="darkest-background h-[45%] w-full">
        <img
          className="h-full w-full object-cover"
          loading="lazy"
          src={props.flags.png}
        />
      </div>

      <CountryCardInfo
        flags={props.flags}
        name={props.name}
        nativeName={props.nativeName}
        population={props.population}
        region={props.region}
        capital={props.capital}
      />
    </motion.button>
  );
}
