import ThemeIcon from "../assets/ThemeIcon.tsx";
import { Theme } from "../util/customTypes.ts";

interface Props {
  currentTheme: Theme;
  changeTheme: Function;
}

export default function TopNav(props: Props) {
  return (
    <nav className="default-background h-20 flex justify-between items-center nav-side-padding sticky z-50 top-0">
      <h1 className="text-2xl font-extrabold p-3"> Where in the world? </h1>

      <button
        className="flex items-center gap-2 capitalize p-3"
        onClick={() => props.changeTheme()}
      >
        <ThemeIcon currentTheme={props.currentTheme} />
        {props.currentTheme == "light" ? "dark" : "light"} mode
      </button>
    </nav>
  );
}
