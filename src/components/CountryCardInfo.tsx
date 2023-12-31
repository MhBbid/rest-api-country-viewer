import { CountryInfos } from "../util/customTypes";

export default function CountryCardInfo(country: CountryInfos) {
  return (
    <div className="flex flex-col gap-4 p-8 w-full h-max text-left">
      <div className="flex flex-wrap gap-x-1">
        <h1 className="text-lg font-extrabold">{country.name} </h1>
        <h1 className="text-lg font-extrabold lighter-text">{`(${
          country.nativeName != "" ? country.nativeName : "No Native Name"
        })`}</h1>
      </div>

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
