import iSearch from "../assets/images/icon-search.svg";

function Search() {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-6 mb-3 w-full">
      <div className="flex bg-neutral-600 mb-2 md:mb-0 md:mr-4 px-5 py-3 rounded-xl">
        <img src={iSearch} alt="Search Icon" className="w-5 mr-3" />
        <input type="text" placeholder="Search for a place..." />
      </div>
      <button>Search</button>
    </div>
  );

  // <p>Search for a city, e.g., New York</p>
  // <p>Search</p>
}

export default Search;
