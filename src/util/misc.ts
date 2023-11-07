export function standardiseString(string: string) {
	return string.toLowerCase().replaceAll(" ", "_");
}

export const MaxCardsPerPage = 12;

export const desiredDataFields = [
	"flags",
	"name",
	"population",
	"region",
	"subregion",

	"capital",
	"topLevelDomain",
	"currencies",
	"languages",
	"borders",
];

export const Regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Antarctic"];
export const Sortings = ["Name A-Z", "Name Z-A", "Most Populated", "Least Populated"];