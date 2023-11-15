import { useState, useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { selectedCountryAtom } from "../App";

import { motion } from "framer-motion";
import DropdownIcon from "../assets/DropdownIcon";

interface Props {
  selectItems: string[];
  defaultItem: string;
  onSelectedChange: Function;
  defaultSvgPath?: string;
  svgPaths?: string[];
}

export default function Dropdown(props: Props) {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCountry] = useAtom(selectedCountryAtom);

  const dropdownToggleRef = useRef<HTMLButtonElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    selectedItem >= 0
      ? props.onSelectedChange(props.selectItems[selectedItem])
      : props.onSelectedChange(props.defaultItem);
  }, [selectedItem]);

  return (
    <div className="relative flex items-center w-full h-full">
      <button
        ref={dropdownToggleRef}
        onClick={() => {
          setIsMenuOpen((prev: boolean) => !prev);
          dropdownToggleRef.current && dropdownToggleRef.current.focus();
        }}
        disabled={selectedCountry != ""}
        className="default-background default-hover rounded-lg py-4 px-6 h-full w-full flex items-center"
      >
        <div className="flex gap-3 items-center w-full">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            height="1.25em"
            viewBox="0 0 640 512"
          >
            <path
              d={
                selectedItem >= 0
                  ? props.svgPaths && props.svgPaths[selectedItem]
                  : props.defaultSvgPath
              }
            ></path>
          </svg>
          <span className="mr-auto truncate">
            {selectedItem >= 0
              ? props.selectItems[selectedItem]
              : props.defaultItem}
          </span>
          <DropdownIcon isMenuOpen={isMenuOpen} />
        </div>
      </button>

      <motion.div
        ref={dropdownMenuRef}
        className={`default-background rounded-lg absolute z-40 flex flex-col gap-1 py-3 px-4 w-full top-16`}
        variants={{
          visible: { opacity: 1, translateY: 0, display: "flex" },
          hidden: {
            opacity: 0,
            translateY: -35,
            transitionEnd: {
              display: "none",
            },
          },
        }}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ duration: 0.15, ease: "linear" }}
      >
        {props.selectItems.map((item: string, index: number) => (
          <button
            key={index}
            className="w-full text-left p-3 default-hover flex items-center gap-3"
            onClick={() => {
              setSelectedItem(index);
              setIsMenuOpen(false);
            }}
            disabled={!isMenuOpen || selectedCountry != ""}
          >
            <div className="min-h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.25em"
                viewBox="0 0 640 512"
              >
                <path d={props.svgPaths && props.svgPaths[index]}></path>
              </svg>
            </div>
            <span className="block whitespace-nowrap overflow-hidden text-ellipsis">
              {item}
            </span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}
