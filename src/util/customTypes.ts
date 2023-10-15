import React from "react";

export type Theme = "light" | "dark";

export const Regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Antarctic"];
export const Sortings = ["Name A-Z", "Name Z-A", "Most Populated", "Least Populated"];

export interface CountryInfos {
	flags: any;
  name: string;
	nativeName: string
  population: number;
  region: string;
  capital: string;
}

export interface CountryDetails {
	flags: any;
	name: string;
	nativeName: string
	population: number;
	region: string;
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

export interface RegionPickerProps {
	onRegionalFilterChange: Function;
}

export interface SortingPickerProps {
	onSortingChange: Function;
}