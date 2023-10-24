import { useState, useEffect } from "react";
import { Theme } from "../util/customTypes";

const rootElement = document.querySelector(":root");

export default function useTheme() {
	const browserTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
	const latestTheme: Theme = localStorage.getItem("LatestTheme") || browserTheme;

	const [currentTheme, setCurrentTheme] = useState<Theme>(latestTheme);

	function changeTheme() {
		currentTheme == "light" ? setCurrentTheme("dark") : setCurrentTheme("light");
	}
	
	useEffect(() => {
		rootElement ? rootElement.className = currentTheme : console.error("how did we get here?");
		localStorage.setItem("LatestTheme", currentTheme);
	}, [currentTheme]);

	return { currentTheme, changeTheme }
}