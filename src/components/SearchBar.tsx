import { useRef } from "react";
import SearchIcon from "../assets/SearchIcon";
import { SearchBarProps } from "../util/customTypes";

export default function SearchBar(props: SearchBarProps) {
  const inputRef = useRef<any>();

  return (
    <div className="default-background default-hover flex items-center px-8 py-4 gap-6 rounded-lg outline-2 focus-within:outline">
      <SearchIcon
        onClick={() => {
          inputRef.current && inputRef.current.focus();
        }}
      />
      <input
        ref={inputRef}
        onChange={props.onSearchChange}
        type="search"
        placeholder="Search for a country..."
        className="bg-transparent w-full outline-none"
      />
    </div>
  );
}
