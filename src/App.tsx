import Banner from "./components/Banner";
import Current from "./components/Current";
import Daily from "./components/Daily";
import Hourly from "./components/Hourly";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Banner />
      <h1>How's the sky looking today?</h1>
      <Search />
      <div className="flex gap-6">
        <div className="flex flex-col gap-6">
          <Current />
          <Daily />
        </div>
        <Hourly />
      </div>

      <div className="text-sm text-neutral-200">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
