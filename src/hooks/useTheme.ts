import { useState, useEffect } from "react";

const rootElement = document.querySelector(":root");

export default function useTheme() {
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
	const defaultTheme = sessionStorage.getItem("LatestTheme") || systemTheme;

	const [currentTheme, setCurrentTheme] = useState(defaultTheme);

	function changeTheme() {
		currentTheme == "light" ? setCurrentTheme("dark") : setCurrentTheme("light");
	}
	useEffect(() => {
		rootElement ? rootElement.className = currentTheme : null;
		sessionStorage.setItem("LatestTheme", currentTheme);
	}, [currentTheme])

	return { currentTheme, changeTheme }
}