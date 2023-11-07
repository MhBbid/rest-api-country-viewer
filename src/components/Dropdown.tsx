import { useState, useEffect, useRef } from "react";
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
        className="default-background default-hover rounded-lg py-4 px-6 h-full w-full flex items-center"
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-3">
            {/* it doesnt look like i can do the whole text ellipsis thing that i did on the dropdown menu itself if there is ever
            an element to the right so might aswell do the next best thing and hide this icon whenever it could cause any trouble*/}
            <svg
              className="hidden sm:block"
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

            <label className="whitespace-nowrap">
              {selectedItem >= 0
                ? props.selectItems[selectedItem]
                : props.defaultItem}
            </label>
          </div>
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
            translateY: -50,
            transitionEnd: {
              display: "none",
            },
          },
        }}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {props.selectItems.map((item: string, index: number) => (
          <button
            key={index}
            className="w-full text-left p-3 default-hover flex items-center gap-3"
            onClick={() => {
              setSelectedItem(index);
              setIsMenuOpen(false);
            }}
            disabled={!isMenuOpen}
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
            <label className="block whitespace-nowrap overflow-hidden text-ellipsis">
              {item}
            </label>
          </button>
        ))}
      </motion.div>
    </div>
  );
}
