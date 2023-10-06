import CountryInfo from "./CountryInfo";
import { CountryInfos } from "../util/customTypes";

export default function CountryCard(country: CountryInfos) {
  return (
    <div
      tabIndex={0}
      className="flex flex-col default-background rounded-md overflow-hidden h-full cursor-pointer hover:scale-105 focus:scale-105"
    >
      <img
        loading="lazy"
        src={country.flags.png}
        className="h-52 object-cover"
      />
      <CountryInfo
        flags={country.flags}
        name={country.name}
        nativeName={country.nativeName}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    </div>
  );
}
