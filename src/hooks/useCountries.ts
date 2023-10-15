import countriesFetched from "../util/countriesData";
import { CountryDetails, Regions } from "../util/customTypes";

import { useState } from "react"
import { standardiseString } from "../util/utilityFunctions";

export default function useCountries(searchQuery: string, regionalFilter: string, sorting: string) {
	const [countries, setFiltredCountries] = useState(countriesFetched.data);
	
	function changeCountries() {
		sortCountriesFetched();
		
		setFiltredCountries(() => countriesFetched.data.filter((country: CountryDetails) => {
			const name = standardiseString(country.name.toString());
			const nativeName = standardiseString(country.nativeName.toString());

			return (name.includes(searchQuery) || nativeName.includes(searchQuery)) &&
			(!Regions.includes(regionalFilter) || country.region.includes(regionalFilter));
		}))
	}

	function sortCountriesFetched() {
		switch(sorting) {
			case "Name A-Z":
				countriesFetched.sortAlphabetically.fromA();
				break;
			case "Name Z-A":
				countriesFetched.sortAlphabetically.fromZ();
				break;
			case "Most Populated":
				countriesFetched.sortNumerically.fromHighest();
				break;
			case "Least Populated":
				countriesFetched.sortNumerically.fromLowest();
				break;
		}
	}

	return { countries, changeCountries };
}