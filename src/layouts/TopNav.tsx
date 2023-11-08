import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { selectedCountryAtom } from "../App.tsx";
import { useAtom } from "jotai";

import ThemeIcon from "../assets/ThemeIcon.tsx";
import { Theme } from "../util/customTypes.ts";

interface Props {
  currentTheme: Theme;
  changeTheme: Function;
}

export default function TopNav(props: Props) {
  const [selectedCountry, setSelectedCountry] = useAtom(selectedCountryAtom);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestScroll) => {
    if (selectedCountry == "") {
      const previousScroll = scrollY.getPrevious();
      latestScroll > previousScroll && latestScroll > 50
        ? setVisible(false)
        : setVisible(true);
    }
  });

  return (
    <motion.nav
      className="default-background h-20 w-full nav-side-padding fixed z-50 top-0 flex justify-between items-center"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={
        selectedCountry != "" ? "visible" : visible ? "visible" : "hidden"
      }
      transition={{ duration: 0.1 }}
    >
      <h1 className="text-2xl font-extrabold p-3"> Where in the world? </h1>

      <button
        className="flex items-center gap-2 capitalize p-3"
        onClick={() => props.changeTheme()}
      >
        <ThemeIcon currentTheme={props.currentTheme} />
        {props.currentTheme == "light" ? "dark" : "light"} mode
      </button>
    </motion.nav>
  );
}
