import sortableData from "../util/sortableData";
import { desiredDataFields } from "../util/misc";

export default async function useCountriesData() {
  // getting the data
  const countryDataJSON = await fetch(
    `https://restcountries.com/v3.1/all?fields=${desiredDataFields.join(",")}`
  );
  const countryDataParsed = await countryDataJSON.json();

  // implementing the stupid sortability i made that could have
  // litteraly just been about 6 lines of code in the jsx
  const countryNames: string[] = [];
  const countryPopulations: number[] = [];

  countryDataParsed.forEach((country: any) => {
    countryNames.push(country.name.common);
    countryPopulations.push(country.population);
  });

  const countriesFetched = new sortableData(
    countryDataParsed,
    countryNames,
    countryPopulations
  );

  // couple of tweeks to the data
  countriesFetched.data.forEach((country: any) => {
    country.capital == "" ? (country.capital = "None") : null;
    country.subregion == "" ? (country.subregion = "None") : null;
    country.currencies == "" ? (country.currencies = "None") : null;
    country.languages == "" ? (country.languages = "None") : null;
    country.borders == "" ? (country.borders = "None") : null;

    country.nativeName = Object.values(country.name.nativeName)[0];
    country.nativeName != undefined
      ? (country.nativeName = country.nativeName.common)
      : (country.nativeName = "");

    country.name = country.sortingName;
    country.number = country.sortingNumber;
  });

  return countriesFetched;
}
