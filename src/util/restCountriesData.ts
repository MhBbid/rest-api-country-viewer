import { sortableData } from "./boilerplate";

const desiredDataFields = [
	'flags',
	'name',
	'nativeName',
	'population',
	'region',

	'subregion',
	'capital',
	'topLevelDomain',
	'currencies',
	'languages',
	'borders'
];

const dataFile = await fetch(`https://restcountries.com/v3.1/all?fields=${desiredDataFields.join(',')}`);
const dataParsed = await dataFile.json();

const countryNames: string[] = [];
const countryNumbers: number[] = [];

dataParsed.forEach((country: any) => {
	countryNames.push(country.name.common);
	countryNumbers.push(country.population);
});

export const countries = new sortableData(dataParsed, countryNames, countryNumbers);
countries.sortAlphabetically.increment();