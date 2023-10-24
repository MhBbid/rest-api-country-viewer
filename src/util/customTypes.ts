import React from "react";

export type Theme = "light" | "dark";
export type ScrollDirection = "down" | "up";

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
	searchQueryState: string;
	onSearchChange: React.ChangeEventHandler;
}

export interface RegionPickerProps {
	onRegionalFilterChange: Function;
}

export interface SortingPickerProps {
	onSortingChange: Function;
}