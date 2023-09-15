import { useEffect } from "react";
import TopNav from "./components/TopNav";
import { changeTheme, revertTheme } from "./util/changeTheme";

export default function App() {
  revertTheme();

  return (
    <>
      <TopNav />
    </>
  );
}
