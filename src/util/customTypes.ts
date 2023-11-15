import React from "react";

export type ScrollDirection = "down" | "up";

export interface CountryInfos {
	flags: countryFlags;
  name: string;
	nativeName: string
  population: number;
  region: string;
  capital: string;
}

export interface CountryDetails {
	flags: countryFlags;
	name: string;
	nativeName: string;
	cca3: string;
	capital: string;
	population: number;
	
	region: string;
	subregion: string;
	currencies: currencies | "None";
	languages: string[];
	tld: string[];
	borders: string[] | "";
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

interface countryFlags {
	png: string,
	svg: string
}

interface currencies {
	name: string;
	symbol: string;
}