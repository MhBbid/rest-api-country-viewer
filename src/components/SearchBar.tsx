import React from "react";
import { useEffect, useRef } from "react";

import { SearchBarProps } from "../util/customTypes";
import { useInView } from "framer-motion";

const SearchIcon = React.lazy(() => import("../assets/SearchIcon"));

export default function SearchBar(props: SearchBarProps) {
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isSearchBarInView = useInView(searchBarRef);

  useEffect(() => {
    searchBarRef.current && !isSearchBarInView && searchBarRef.current.blur();
  }, [isSearchBarInView]);

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    // dont use [a-z A-Z], there are more languages than just english you know (also dont forget space)
    // https://dev.to/tillsanders/let-s-stop-using-a-za-z-4a0m
    e.target.value = e.target.value.replace(/[^\p{Letter}\p{Mark} ]+/gu, "");
    props.onSearchChange(e);
  }

  return (
    <div
      ref={searchBarRef}
      onClick={() => inputRef.current && inputRef.current.focus()}
      className="default-background default-hover flex items-center px-8 py-4 gap-6 rounded-lg outline-2 cursor-text focus-within:outline"
    >
      <SearchIcon />
      <input
        ref={inputRef}
        onChange={handleSearchChange}
        type="search"
        placeholder="Search for a country..."
        className="bg-transparent w-full outline-none"
      />
    </div>
  );
}
