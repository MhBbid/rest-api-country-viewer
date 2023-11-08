import { useEffect } from "react";
import { motion } from "framer-motion";

import { useAtom } from "jotai";
import { selectedCountryAtom } from "../App";

export default function CountryDetails() {
  const [selectedCountry, setSelectedCountry] = useAtom(selectedCountryAtom);

  useEffect(() => {
    document.documentElement.style.overflow =
      selectedCountry != "" ? "hidden" : "auto";
  }, [selectedCountry]);

  return (
    <motion.div
      className="darker-background fixed h-screen w-full py-16 side-padding z-50"
      variants={{
        // i dont get why this animation is so janky without this translateX bullshittery,
        // but i have to blame something
        // F r a m e r  M o t i o n
        visible: {
          translateX: "-50vw",
          display: "block",
          transitionEnd: {
            translateX: 0,
          },
        },
        hidden: {
          translateX: "150vw",
          transitionEnd: { translateX: "100vw", display: "none" },
        },
      }}
      initial="hidden"
      animate={selectedCountry != "" ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
    >
      <button
        className="default-background rounded-lg pl-9 pr-12 py-3 flex justify-center items-center gap-4"
        onClick={() => setSelectedCountry("")}
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

      <div className="h-full my-16">
        <div className="darker-background h-[45%] w-full">
          <img loading="lazy" className="h-full w-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
}
