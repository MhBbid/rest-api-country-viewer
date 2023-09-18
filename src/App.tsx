import HomePage from "./pages/HomePage";
import TopNav from "./pages/TopNav";

export default function App() {
  return (
    <>
      <TopNav />
      <div className="px-32 py-12">
        <HomePage />
      </div>
    </>
  );
}
