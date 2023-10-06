// i wanted this to not be project specific, so i could just copy and paste this file in anywhere,
// but i had no idea what i was doing when it came to this oop stuff, sorry in advance:

class sortAlphabetically {
	data: any[];
	constructor(data: any[]) {
		this.data = data
	}

	fromA() {
		this.data.sort((a: any, b: any) => a.name.localeCompare(b.name));
	}

	fromZ() {
		this.data.sort((a: any, b: any) => -a.name.localeCompare(b.name));
	}
}

class sortNumerically {
	data: any;
	constructor(data: any) {
		this.data = data
	}

	fromLowest() {
		this.data.sort((a: any, b: any) => a.number - b.number);
	}

	fromHighest() {
		this.data.sort((a: any, b: any) => b.number - a.number);
	}
}

export class sortableData {
	data: any;
	dataNames: string[];
	dataNumbers: number[];

	sortAlphabetically: sortAlphabetically;
	sortNumerically: sortNumerically;

	constructor(data: any, names: string[], numbers: number[]) {
		this.data = data;
		this.dataNames = names;
		this.dataNumbers = numbers;
		
		this.sortAlphabetically = new sortAlphabetically(this.data);
		this.sortNumerically = new sortNumerically(this.data);

		this.data.forEach((entry: any, index: number) => {
			entry.dataName = this.dataNames[index];
		});

		this.data.forEach((entry: any, index: number) => {
			entry.dataNumber = this.dataNumbers[index];
		});
	}
}