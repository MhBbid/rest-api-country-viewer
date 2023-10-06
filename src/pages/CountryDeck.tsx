import { CountryInfos } from "../util/customTypes";
import CountryCard from "../components/CountryCard";

interface Props {
  countries: CountryInfos[];
}

export default function CountryDeck(props: Props) {
  const countries = props.countries;

  return (
    <div className="grid bento-grid gap-8">
      {countries.map((country: CountryInfos) => (
        <CountryCard
          key={country.name}
          flags={country.flags}
          name={country.name}
          nativeName={country.nativeName}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  );
}
