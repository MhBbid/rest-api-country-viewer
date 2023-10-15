import useTheme from "../hooks/useTheme.ts";
import ThemeIcon from "../assets/ThemeIcon.tsx";

export default function TopNav() {
  const { currentTheme, changeTheme } = useTheme();

  return (
    <nav className="default-background h-20 flex justify-between items-center nav-side-padding sticky z-50 top-0">
      <h1 className="text-2xl font-extrabold p-3"> Where in the world? </h1>

      <button
        className="flex items-center gap-2 capitalize p-3"
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
