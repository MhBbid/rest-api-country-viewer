import HomePage from "./pages/Home/Home";
import TopNav from "./pages/TopNav";

export default function App() {
  return (
    <div className="grid gap-12 pb-12">
      <TopNav />
      <HomePage />
    </div>
  );
}
