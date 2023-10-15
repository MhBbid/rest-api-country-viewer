import { CountryInfos } from "../util/customTypes";

export default function CountryInfo(country: CountryInfos) {
  return (
    <div className="flex flex-col gap-4 p-8">
      <h1 className="text-lg font-extrabold">
        {country.name}{" "}
        <span className="text-lg font-extrabold lighter-text">{`(${country.nativeName})`}</span>
      </h1>

      <ul>
        <p>
          Population:{" "}
          <span className="lighter-text">
            {country.population.toLocaleString()}
          </span>
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
