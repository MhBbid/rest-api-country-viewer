import { useState } from "react";
import { useAtom } from "jotai";
import { selectedCountryAtom } from "../App";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const [selectedCountry] = useAtom(selectedCountryAtom);

  useMotionValueEvent(scrollY, "change", (latestScroll) => {
    latestScroll > 200 ? setVisible(true) : setVisible(false);
  });

  return (
    <motion.button
      className="default-background default-hover rounded-md p-4 w-12 z-40 fixed top-[80vh] left-[5vw] flex justify-center items-center"
      title={visible ? "Scroll to Top" : ""}
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
      disabled={selectedCountry != ""}
      variants={{
        visible: { opacity: 1, translateY: 0, display: "flex" },
        hidden: {
          opacity: 0,
          translateY: "200%",
          transitionEnd: {
            display: "none",
          },
        },
      }}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      transition={{
        delay: 0,
        duration: visible ? 0.15 : 0.25,
        ease: "easeOut",
      }}
    >
      {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.25em"
        viewBox="0 0 384 512"
      >
        <path d="M350 177.5c3.8-8.8 2-19-4.6-26l-136-144C204.9 2.7 198.6 0 192 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26s12.5 14.5 22 14.5h88l0 192c0 17.7-14.3 32-32 32H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32l80 0c70.7 0 128-57.3 128-128l0-192h88c9.6 0 18.2-5.7 22-14.5z" />
      </svg>
    </motion.button>
  );
}
