import useTheme from "../hooks/useTheme.ts";
import ThemeIcon from "../assets/ThemeIcon.tsx";

export default function TopNav() {
  const { currentTheme, changeTheme } = useTheme();

  return (
    <nav className="default-background h-20 flex justify-between items-center side-padding">
      <h1 className="text-2xl font-extrabold">Where in the world?</h1>
      <button
        className="flex items-center gap-2 capitalize p-2"
        onClick={() => {
          changeTheme();
        }}
      >
        <ThemeIcon />
        {currentTheme == "light" ? "dark" : "light"} mode
      </button>
    </nav>
  );
}