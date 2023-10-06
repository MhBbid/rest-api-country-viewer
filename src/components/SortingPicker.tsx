import { SortingPickerProps } from "../util/customTypes";

export default function SortingPicker(props: SortingPickerProps) {
  return (
    <select className="default-background rounded-lg p-4 appearance-none cursor-pointer">
      <option> Name: A-Z </option>
      <option> Name: Z-A </option>

      <option> Highest Population </option>
      <option> Lowest Population </option>
    </select>
  );
}
