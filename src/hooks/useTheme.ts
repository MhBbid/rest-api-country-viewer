import { useState, useEffect } from "react";

const rootElement = document.querySelector(":root");

export default function useTheme() {
	type theme = "light" | "dark";
	const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

	const [currentTheme, setCurrentTheme] = useState<theme>(defaultTheme);

	function changeTheme() {
		currentTheme == "light" ? setCurrentTheme("dark") : setCurrentTheme("light");
	}
	
	if (rootElement) {
		useEffect(() => {
			rootElement.className = defaultTheme;
			rootElement.className = currentTheme;

		}, [currentTheme, defaultTheme])
	}

	return { currentTheme, changeTheme }
}