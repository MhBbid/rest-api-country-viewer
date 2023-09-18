import { useRef } from "react";
import SearchIcon from "../assets/icons/SearchIcon";

export default function SearchBar() {
  // don't know what type to use so any it is
  const inputRef = useRef<any>();

  return (
    <div className="default-background flex items-center px-8 py-4 gap-6 rounded-lg outline-none">
      <SearchIcon
        onClick={() => {
          inputRef.current && inputRef.current.focus();
        }}
      />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for a country..."
        className="bg-transparent w-full outline-none group-focus:outline-1"
      />
    </div>
  );
}
