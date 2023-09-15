const rootElement = document.querySelector(":root");

type theme = "light" | "dark";
const systemTheme: theme = window.matchMedia('(prefers-color-scheme: dark)') ? "dark" : "light";

let currentTheme: theme = systemTheme;

function changeTheme() {
	if (rootElement) {
		currentTheme == "light" ? rootElement.className = "dark" : rootElement.className = "light";
	}
}

function revertTheme() {
	if (rootElement) {
		rootElement.className = "";
	}
}

export { currentTheme, changeTheme, revertTheme }