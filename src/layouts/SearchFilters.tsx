import { SearchBarProps } from "../util/customTypes";
import { Regions, Sortings } from "../util/misc";

import { SortingPickerProps } from "../util/customTypes";
import { RegionPickerProps } from "../util/customTypes";

import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";

import { defaultSortingPickerSvgPath } from "../util/searchFiltersSvgPaths";
import { defaultRegionPickerSvgPath } from "../util/searchFiltersSvgPaths";

import { sortingPickerSvgPahts } from "../util/searchFiltersSvgPaths";
import { regionPickerSvgPaths } from "../util/searchFiltersSvgPaths";

interface Props extends SearchBarProps, SortingPickerProps, RegionPickerProps {}

export default function SearchFilters(props: Props) {
  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-16 grid-cols-1 grid-rows-2 gap-3 side-padding">
      <SearchBar
        searchQueryState={props.searchQueryState}
        onSearchChange={props.onSearchChange}
      />

      <div className="grid grid-cols-2 gap-2">
        <Dropdown
          defaultItem="Sort by Property"
          selectItems={Sortings}
          onSelectedChange={props.onSortingChange}
          defaultSvgPath={defaultSortingPickerSvgPath}
          svgPaths={sortingPickerSvgPahts}
        />
        <Dropdown
          defaultItem="Filter by Region"
          selectItems={["All Regions", ...Regions]}
          onSelectedChange={props.onRegionalFilterChange}
          defaultSvgPath={defaultRegionPickerSvgPath}
          svgPaths={regionPickerSvgPaths}
        />
      </div>
    </div>
  );
}
