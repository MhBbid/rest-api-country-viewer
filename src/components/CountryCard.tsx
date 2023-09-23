import CountryInfo from "./CountryInfo";
import { CountryInfoProps } from "../util/boilerplate";

export default function CountryCard(country: CountryInfoProps) {
  return (
    <div
      tabIndex={0}
      className="flex flex-col default-background rounded-lg overflow-hidden cursor-pointer hover:scale-105 focus:scale-105 hidden"
    >
      <img className="h-24 outline-none" />
      <CountryInfo
        name={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    </div>
  );
}
