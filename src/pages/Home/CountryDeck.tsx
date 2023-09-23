import CountryCard from "../../components/CountryCard";
import { countries } from "../../util/restCountriesData";

export default function CountryDeck() {
  return (
    <div className="grid bento-grid gap-10">
      {countries.data.map((country: any) => (
        <CountryCard
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </div>
  );
}
