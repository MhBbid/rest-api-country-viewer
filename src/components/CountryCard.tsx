import CountryInfo from "./CountryInfo";
import { useRef } from "react";
import { CountryInfos } from "../util/customTypes";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";

interface Props extends CountryInfos {
  columnCount: number;
  index: number;
}

export default function CountryCard(props: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isCardInView = useInView(cardRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  return (
    <motion.div
      ref={cardRef}
      tabIndex={0}
      className="default-background default-hover flex flex-col rounded-md overflow-hidden h-full cursor-pointer card-hover focus-visible:scale-105"
      variants={{
        inView: { opacity: 1, translateY: 0 },
        outOfView: { opacity: 0.05, translateY: 100 },
      }}
      initial={"outOfView"}
      animate={isCardInView ? "inView" : "outOfView"}
      transition={{
        type: "tween",
        duration: isCardInView ? 0.15 : 0,
        delay: isCardInView ? (props.index % props.columnCount) * 0.1 : 0,
        ease: "easeOut",
      }}
    >
      <div className="darker-background h-52">
        <img
          loading="lazy"
          src={props.flags.png}
          className="h-full w-full object-cover"
        />
      </div>

      <CountryInfo
        flags={props.flags}
        name={props.name}
        nativeName={props.nativeName}
        population={props.population}
        region={props.region}
        capital={props.capital}
      />
    </motion.div>
  );
}
