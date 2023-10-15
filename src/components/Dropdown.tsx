import { useState, useEffect, useRef } from "react";

interface Props {
  selectItems: string[];
  defaultItem: string;
  onSelectedChange: Function;
  svgPath?: string;
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
    <div className="relative flex flex-col items-center w-full h-full">
      <button
        ref={dropdownToggleRef}
        onClick={() => {
          setIsMenuOpen((prev: boolean) => !prev);
          dropdownToggleRef.current && dropdownToggleRef.current.focus();
        }}
        className="default-background default-hover rounded-lg py-4 px-6 h-full w-full flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d={props.svgPath}></path>
        </svg>

        {selectedItem >= 0
          ? props.selectItems[selectedItem]
          : props.defaultItem}
      </button>

      {isMenuOpen && (
        <div className="default-background rounded-lg absolute z-40 flex flex-col gap-1 py-3 px-4 w-full top-16">
          {props.selectItems.map((item: string, index: number) => (
            <button
              key={index}
              className="w-full text-left p-3 default-hover"
              onClick={() => {
                setSelectedItem(index);
                setIsMenuOpen(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
