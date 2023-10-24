import { useState, useEffect, useRef } from "react";
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

  const dropdownToggleRef = useRef<any>();

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
        className="default-background default-hover rounded-lg py-4 px-6 h-full w-full flex justify-between items-center"
      >
        <div className="flex items-center gap-3">
          <svg
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

          <label className="block whitespace-nowrap overflow-hidden text-ellipsis">
            {selectedItem >= 0
              ? props.selectItems[selectedItem]
              : props.defaultItem}
          </label>
        </div>

        <DropdownIcon isMenuOpen={isMenuOpen} />
      </button>

      {isMenuOpen && (
        <div className="default-background rounded-lg absolute z-40 flex flex-col gap-1 py-3 px-4 w-full top-16">
          {props.selectItems.map((item: string, index: number) => (
            <button
              key={index}
              className="w-full text-left p-3 default-hover flex items-center gap-3"
              onClick={() => {
                setSelectedItem(index);
                setIsMenuOpen(false);
              }}
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
        </div>
      )}
    </div>
  );
}
