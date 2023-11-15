import { useState, useEffect } from "react";

const rootElement = document.querySelector(":root");

export default function useTheme() {
  const browserTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  const latestTheme = localStorage.getItem("LatestTheme") || browserTheme;

  const [currentTheme, setCurrentTheme] = useState(latestTheme);

  function changeTheme() {
    currentTheme == "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");
  }

  useEffect(() => {
    rootElement
      ? (rootElement.className = currentTheme)
      : console.error("how did we get here?");
    localStorage.setItem("LatestTheme", currentTheme);
  }, [currentTheme]);

  return { currentTheme, changeTheme };
}
