// i had no idea what i was doing when it came to this oop stuff, sorry in advance:
export class sortableData {
	data: Object[];
	sortAlphabetically;
	sortNumerically;

	constructor(data: Object[], names: string[], numbers: number[]) {
		this.data = data;
		this.sortAlphabetically = new sortAlphabetically(this.data);
		this.sortNumerically = new sortNumerically(this.data);

		this.data.forEach((object: any, index: number) => {
			object.name = names[index];
		});

		this.data.forEach((object: any, index: number) => {
			object.number = numbers[index];
		});
	}
}

class sortAlphabetically {
	data: Object[];
	constructor(data: Object[]) {
		this.data = data
	}

	increment() {
		this.data.sort((a: any, b: any) => a.name.localeCompare(b.name));
	}

	decrement() {
		this.data.sort((a: any, b: any) => -a.name.localeCompare(b.name));
	}
}

class sortNumerically {
	data: Object[];
	constructor(data: Object[]) {
		this.data = data
	}

	increment() {
		this.data.sort((a: any, b: any) => a.number - b.number);
	}

	decrement() {
		this.data.sort((a: any, b: any) => b.number - a.number);
	}
}

// these are just types
export type Region = "Afrika" | "Europe" | "Americas" | "Asia" | "Oceania";

export interface CountryInfoProps {
  name: string;
  population: number;
  region: Region;
  capital: string;
}

export interface CountryDetailProps {
	flag: any;
	name: string;
	nativeName: string;
	population: number;
	region: Region;

	subregion: string;
	capital: string;
	topLevelDomain: string;
	currencies: string[];
	languages: string[];
	borderCountries: string[];
}