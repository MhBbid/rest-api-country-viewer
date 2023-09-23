import { CountryInfoProps } from "../util/boilerplate";

export default function CountryInfo(country: CountryInfoProps) {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-lg font-extrabold">{country.name}</h1>

      <ul>
        <p>
          Population: <span className="lighter-text">{country.population}</span>
        </p>

        <p>
          Region: <span className="lighter-text">{country.region}</span>
        </p>

        <p>
          Capital: <span className="lighter-text">{country.capital}</span>
        </p>
      </ul>
    </div>
  );
}