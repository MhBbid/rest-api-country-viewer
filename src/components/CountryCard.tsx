import CountryInfo from "./CountryInfo";
import { CountryInfos } from "../util/customTypes";

export default function CountryCard(country: CountryInfos) {
  return (
    <div
      tabIndex={0}
      className="default-background default-hover flex flex-col rounded-md overflow-hidden h-full cursor-pointer card-hover focus-visible:scale-105"
      onClick={(e) => {
        e.stopPropagation();
      }}
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
