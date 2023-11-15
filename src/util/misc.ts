export function standardiseString(string: string) {
	return string.toLowerCase().replaceAll(" ", "_");
}

export const MAX_CARDS_PER_PAGE = 12;

export const desiredDataFields = [
	"name",
	"cca3",
	"flags",
	"capital",
	"population",
	
	"region",
	"subregion",
	"currencies",
	"languages",
	"tld",
	"borders",
];

export const Regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Antarctic"];
export const Sortings = ["Name A-Z", "Name Z-A", "Most Populated", "Least Populated"];