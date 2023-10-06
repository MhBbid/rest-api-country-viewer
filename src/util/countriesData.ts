import { sortableData } from "./sortableData";

// getting the data
const desiredDataFields = [
	'flags',
	'name',
	'population',
	'region',
	'subregion',

	'capital',
	'topLevelDomain',
	'currencies',
	'languages',
	'borders'
];

const countryDataJSON = await fetch(`https://restcountries.com/v3.1/all?fields=${desiredDataFields.join(',')}`);
const countryDataParsed = await countryDataJSON.json();

// implementing sortabillity
const countryNames: string[] = [];
const countryPopulations: number[] = [];

countryDataParsed.forEach((country: any) => {
	countryNames.push(country.name.common);
	countryPopulations.push(country.population);
});

const countries = new sortableData(countryDataParsed, countryNames, countryPopulations);

// couple of tweeks to the data
countries.data.forEach((country: any) => {
	country.nativeName = Object.values(country.name.nativeName)[0];
	country.nativeName != undefined ? country.nativeName = country.nativeName.common : country.nativeName = country.name;

	country.capital == "" ? country.capital = "None" : null;
	country.name = country.dataName;
});

export { countries }