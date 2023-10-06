import SearchBar from "../components/SearchBar";
import { SearchBarProps, SortingPickerProps } from "../util/customTypes";
import SortingPicker from "../components/SortingPicker";

interface Props extends SearchBarProps, SortingPickerProps {}

export default function SearchFilters(props: Props) {
  return (
    <div className="grid xl:grid-cols-2 xl:grid-rows-1 xl:gap-52 grid-cols-1 grid-rows-2 gap-4">
      <SearchBar onSearchChange={props.onSearchChange} />

      <div className="grid grid-cols-2 gap-4">
        <div></div> {/* placeholder for region picker */}
        <SortingPicker />
      </div>
    </div>
  );
}
