export type Region = "Afrika" | "Europe" | "Americas" | "Asia" | "Oceania";

export interface CountryInfos {
	flags: any;
  name: string;
	nativeName: string
  population: number;
  region: Region;
  capital: string;
}

export interface CountryDetails {
	flags: any;
	name: string;
	nativeName: string
	population: number;
	region: Region;
	subregion: string;
	
	capital: string;
	topLevelDomain: string;
	currencies: string[];
	languages: string[];
	borderCountries: string[];
	[key: string]: any
}

export interface SearchBarProps {
	onSearchChange: React.ChangeEventHandler;
}

export interface SortingPickerProps {
}