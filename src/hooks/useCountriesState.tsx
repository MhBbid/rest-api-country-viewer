import { useState } from "react"
import sortableData from "../util/sortableData";

import { CountryDetails } from '../util/customTypes';
import { Regions, Sortings } from "../util/constants";
import { standardiseString } from "../util/stringUtilities";

export default function useCountriesState(countriesFetched: sortableData, searchQuery: string, regionalFilter: string, sorting: string) {
	const [countries, setFiltredCountries] = useState(countriesFetched.data);
	
	function changeCountries() {
		sortCountriesFetched();
		
		setFiltredCountries(() => countriesFetched.data.filter((country: CountryDetails) => {
			const name = standardiseString(country.name.toString());
			const nativeName = standardiseString(country.nativeName.toString());
			const region = country.region;

			return (name.includes(searchQuery) || nativeName.includes(searchQuery)) &&
			(!Regions.includes(regionalFilter) || region == regionalFilter);
		}))
	}

	function sortCountriesFetched() {
		switch(sorting) {
			case Sortings[0]:
				countriesFetched.sortAlphabetically.fromA();
				break;
			case Sortings[1]:
				countriesFetched.sortAlphabetically.fromZ();
				break;
			case Sortings[2]:
				countriesFetched.sortNumerically.fromHighest();
				break;
			case Sortings[3]:
				countriesFetched.sortNumerically.fromLowest();
				break;
		}
	}

	return { countries, changeCountries };
}